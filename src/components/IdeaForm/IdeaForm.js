import React from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';
import Wrapper from '../Wrapper/Wrapper';
import FormButtons from '../FormButtons/FormButtons';
import { Form, Inputs, Buttons } from './IdeaFormCSS';
import { StyledEditBtn } from '../IdeaList/IdeaListCSS';

const initialValues = {
  name: '',
  rating: '',
  category: '',
  description: '',
  expectations: ''
};

class IdeaForm extends React.Component {
  state = {
    ...initialValues,
  };

  componentDidUpdate(prevProps) {
    if (this.props.ideaId !== '') {
      if (this.props.ideaId !== prevProps.ideaId) {
        this.getIdeaById(this.props.ideaId);
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addOrEditIdea(this.state);
    this.setState({ ...initialValues });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  getIdeaById = async id => {
    const doc = await db.collection('ideas').doc(id).get();

    this.setState({ ...doc.data() });
  };

  resetFields = () => {
    this.props.cancelUpdate();
    this.setState({ ...initialValues });
  };

  render() {
    return (
      <Wrapper title="Add your idea">
        <Form onSubmit={this.handleSubmit}>
          <Inputs>
            <div>
              <label>Name: </label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              <label>Rating: </label>
              <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                <option value="">---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <label>Category: <span><Link to="/categories"><StyledEditBtn /></Link></span></label>
              <select name="category" value={this.state.category} onChange={this.handleChange}>
                <option value="">---</option>
                {this.props.categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Description: </label>
              <textarea name="description" rows="5" cols="50" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div>
              <label>Expectations: </label>
              <textarea name="expectations" rows="5" cols="50" value={this.state.expectations} onChange={this.handleChange} />
            </div>
          </Inputs>
          <Buttons>
            <FormButtons
              id={this.props.ideaId}
              resetFields={this.resetFields}
            />
          </Buttons>
        </Form>
      </Wrapper>
    );
  }
}

export default IdeaForm;
