import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { defineMessages, FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';

import { pushQuery } from 'ducks/application/application';

import IntroCard from './IntroCard/IntroCard';
import { PostsHeader } from 'containers';

const styles = require('./HomeStyles');

const i18n = defineMessages({
  helloWorld: {
    id: 'home.helloWorld',
    defaultMessage: 'Hello guys'
  }
});

@connect(
  createSelector([
    state => state.auth
  ], (auth) => {
    return { auth };
  }),
  { pushQuery }
)
@Radium
export default class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pushQuery: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this._getSortingOptionFromQuery = this._getSortingOptionFromQuery.bind(this);
    this._setSortingOption = this._setSortingOption.bind(this);
    this.changeSortingOption = this.changeSortingOption.bind(this);
  }

  state = {
    sortingOption: 'newest'
  }

  componentWillMount() {
    this._setSortingOption(this._getSortingOptionFromQuery());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query.sorting !== nextProps.location.query.sorting) {
      if (nextProps.location.query.sorting) {
        this._setSortingOption(nextProps.location.query.sorting);
      } else {
        this._setSortingOption('newest');
      }
    }
  }

  _getSortingOptionFromQuery() {
    if (this.props && this.props.location.query.sorting) {
      return this.props.location.query.sorting;
    }
    return 'newest';
  }

  _setSortingOption(sortingOption = 'newest') {
    if (this.state.sortingOption !== sortingOption) {
      this.setState({ sortingOption });
    }
  }

  changeSortingOption(sortingOption = 'newest') {
    if (this._getSortingOptionFromQuery() !== sortingOption) {
      this.props.pushQuery({ sorting: sortingOption });
    }
  }

  render() {
    const { location: { query } } = this.props;

    return (
      <div className="home ui text container main-container">
        <Helmet title="Home"/>
        <IntroCard />
        { /*<PostComposer {...this.props} /> */ }
        <PostsHeader sortingOption={this.state.sortingOption}
                     changeSortingOption={this.changeSortingOption} />
        { /*<Posts {...this.props} />*/ }
      </div>
    );
  }
}
