import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import LayoutPage from '../../components/LayoutPage';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentWillMount() {
    this.initSocket();
  }
});

export default compose(connectToStore, withlifecycle)(LayoutPage);
