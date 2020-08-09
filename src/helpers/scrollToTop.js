import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      toast.dismiss();
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
