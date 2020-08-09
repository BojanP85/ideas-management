import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { db } from '../../firebase';
import Wrapper from '../Wrapper/Wrapper';
import FormButtons from '../FormButtons/FormButtons';
import { InnerWrapper, Form, List } from './CategoriesCSS';
import { StyledEditBtn, StyledDeleteBtn } from '../IdeaList/IdeaListCSS';

class Categories extends React.Component {
  state = {
    name: '',
    categoryId: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.categoryId !== '') {
      if (this.state.categoryId !== prevState.categoryId) {
        this.getCategoryById(this.state.categoryId);
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name.trim() === '') {
      toast('You must provide Category name.', {
        type: 'error',
        autoClose: false
      });
    } else {
      this.addOrEditCategory(this.state.name);
      this.setState({ name: '' });
    }
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
    toast.dismiss();
  };

  addOrEditCategory = async category => {
    try {
      if (this.state.categoryId === '') {
        await db.collection('categories').doc().set({
          name: category,
          createdAt: new Date()
        });

        toast('New Category Added !', {
          type: 'success',
          autoClose: 2000
        });
      } else {
        await db.collection('categories').doc(this.state.categoryId).update({
          name: category
        });

        toast('Category Updated !', {
          type: 'success',
          autoClose: 2000
        });

        this.setState({ categoryId: '' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteCategory = async id => {
    if (id === this.state.categoryId) {
      toast(<p>This Category is prepared for editing.<br/>Cancel edit action if you want to delete it.</p>, {
        type: 'error',
        autoClose: false
      });
    } else {
      if (window.confirm('Are you sure?')) {
        await db.collection('categories').doc(id).delete();

        toast('Category Deleted !', {
          type: 'error',
          autoClose: 2000
        });
      }
    }
  };

  editCategory = categoryId => {
    this.setState({ categoryId });
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  getCategoryById = async id => {
    const doc = await db.collection('categories').doc(id).get();

    this.setState({ name: doc.data().name });
  };

  resetFields = () => {
    this.setState({ name: '', categoryId: '' });
    toast.dismiss();
  };

  renderCategories = () => {
    if (this.props.categories.length === 0) {
      return null;
    }

    return (
      <List>
        <table>
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {this.props.categories.map(category => (
              <tr key={category.id}>
                <td>
                  {category.name}
                  <div>
                    <StyledEditBtn onClick={() => this.editCategory(category.id)} />
                    <StyledDeleteBtn onClick={() => this.deleteCategory(category.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </List>
    );
  };

  render() {
    return (
      <Wrapper title="Manage categories">
        <InnerWrapper>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <label><span>*</span> Category:</label>
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              <FormButtons
                id={this.state.categoryId}
                resetFields={this.resetFields}
              />
              <Link to="/"><button type="button"><RiArrowGoBackLine /></button></Link>
            </div>
          </Form>
          {this.renderCategories()}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default Categories;
