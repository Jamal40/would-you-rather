import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import NotFound from "../NotFound/not-found";
import LoadingSpinner from "../LoaidngSpinner/loading-spinner";
import "./question-result.css";
import "semantic-ui-css/semantic.min.css";

//Actions
import { assignCameFromLink } from "../../Actions/authorizeUserActions";

///react router
import { withRouter, Redirect } from "react-router";

//redux
import { connect } from "react-redux";

class QuestionResult extends Component {
  constructor(props) {
    super(props);
    this.state.requiredQuestion = null;
    this.state.loadingQuestion = true;
  }
  state = {};
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    this.getStatsFromDb();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getStatsFromDb() {
    fetch(
      `https://safe-chamber-24261.herokuapp.com/api/questions/stats/${this.props.match.params.id}`
    ).then(async (res) => {
      const requiredQuestion = await res.json();
      if (this._isMounted) {
        this.setState({
          requiredQuestion: requiredQuestion,
          loadingQuestion: false,
        });
      }
    });
  }
  render() {
    if (!this.props.currentUser._id) {
      this.props.AssignCameFromLink(this.props.location.pathname);
      return <Redirect to="/login" />;
    }

    if (this.props.loading || this.state.loadingQuestion) {
      return <LoadingSpinner />;
    }

    if (!this.state.requiredQuestion && !this.state.loadingQuestion) {
      return <NotFound />;
    }

    let votes1 = this.state.requiredQuestion?.optionOneCount;
    let votes2 = this.state.requiredQuestion?.optionTwoCount;
    let totalVotes = votes1 + votes2;

    return (
      <div className="question-results-main">
        <Card className="question-results-card-container">
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={this.state.requiredQuestion?.author.avatarURL}
            />
            <Card.Header>
              {this.state.requiredQuestion?.author.name} asks
            </Card.Header>
            <Card.Description>Would you rather...?</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic disabled color="green">
                {this.state.requiredQuestion?.optionOne}
                <br />
                <br />
                {`${votes1} vote/s => ${((votes1 * 100) / totalVotes).toFixed(
                  0
                )}%`}
              </Button>
              <Button disabled basic color="red">
                {this.state.requiredQuestion?.optionTwo}
                <br />
                <br />
                {`${votes2} vote/s => ${((votes2 * 100) / totalVotes).toFixed(
                  0
                )}%`}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authUserReducer,
    allQuestions: state.questionsReducer,
    allUsers: state.userReducer,
    loading: state.loaderReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AssignCameFromLink: (link) => dispatch(assignCameFromLink(link)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionResult)
);
