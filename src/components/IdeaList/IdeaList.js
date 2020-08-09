import React from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

import { db, increment } from '../../firebase';
import IdeaForm from '../IdeaForm/IdeaForm';
import Wrapper from '../Wrapper/Wrapper';
import { StyledTable, StyledEditBtn, StyledDeleteBtn } from './IdeaListCSS';

class IdeaList extends React.Component {
  _isMounted = false;

  state = {
    ideas: [],
    ideaId: ''
  };

  componentDidMount() {
    this._isMounted = true;
    this.getIdeas();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  addOrEditIdea = async idea => {
    try {
      if (this.state.ideaId === '') {
        await db.collection('counter').doc('XJSrUXCmDwDtgz01aY5c').update({
          counter: increment
        });
        const counterRef = await db.collection('counter').doc('XJSrUXCmDwDtgz01aY5c').get();

        await db.collection('ideas').doc().set({
          ...idea,
          entryNumber: counterRef.data().counter,
          createdAt: new Date(),
          updatedAt: null
        });

        document.getElementById('list-of-ideas').scrollIntoView({ behavior: 'smooth' });
        toast('New Idea Added !', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await db.collection('ideas').doc(this.state.ideaId).update({
          ...idea,
          updatedAt: new Date()
        });

        document.getElementById('list-of-ideas').scrollIntoView({ behavior: 'smooth' });
        toast('Idea Updated !', {
          type: 'success',
          autoClose: 2000
        });

        this.setState({ ideaId: '' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteIdea = async id => {
    if (id === this.state.ideaId) {
      toast(<p>This Idea is prepared for editing.<br/>Cancel edit action if you want to delete it.</p>, {
        type: 'error',
        autoClose: false
      });
    } else {
      if (window.confirm('Are you sure?')) {
        await db.collection('ideas').doc(id).delete();

        toast('Idea Deleted !', {
          type: 'error',
          autoClose: 2000
        });
      }
    }
  };

  editIdea = ideaId => {
    this.setState({ ideaId });
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  cancelUpdate = () => {
    this.setState({ ideaId: '' });
    toast.dismiss();
  };

  getIdeas = async () => {
    await db.collection('ideas')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const docs = [];
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        if (this._isMounted) {
          this.setState({ ideas: docs });
        }
      });
  };

  renderIdeas = () => {
    if (this.state.ideas.length === 0) {
      return null;
    }

    return (
      <Wrapper title="List of ideas" id="list-of-ideas">
        <StyledTable>
          <thead>
            <tr>
              <th>Entry #</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Description</th>
              <th>Expectations</th>
              <th>Created</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.ideas.map(idea => (
              <tr key={idea.id}>
                <td>{idea.entryNumber}</td>
                <td>{idea.name}</td>
                <td>{idea.rating}</td>
                <td>{idea.category}</td>
                <td>{idea.description}</td>
                <td>{idea.expectations}</td>
                <td>{moment(idea.createdAt.toDate()).calendar()}</td>
                <td>{idea.updatedAt ? moment(idea.updatedAt.toDate()).calendar() : ''}</td>
                <td>
                  <StyledEditBtn onClick={() => this.editIdea(idea.id)} />
                  <StyledDeleteBtn onClick={() => this.deleteIdea(idea.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Wrapper>
    );
  };

  render() {
    return (
      <>
        <IdeaForm
          addOrEditIdea={this.addOrEditIdea}
          ideaId={this.state.ideaId}
          cancelUpdate={this.cancelUpdate}
          categories={this.props.categories}
        />
        {this.renderIdeas()}
      </>
    );
  }
}

export default IdeaList;
