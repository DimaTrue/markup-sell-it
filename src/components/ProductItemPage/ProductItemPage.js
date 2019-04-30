import React, { Fragment } from 'react';
import style from './ProductItemPage.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import Loading from '../CommonComponents/Loading/Loading';
import item from '../../img/item.jpg';

class ProductItemPage extends React.Component {
  state = {
    isLoading: true,
    data: {},
  }

  async componentDidMount() {
    axios.get(`http://light-it-04.tk/api/posters/`, {
      params: {
        page: 1,
      }
    })
      .then(res => res.data.data[this.props.match.params.id].images)
      .then(data => {
        if (data.length === 0) {
          this.setState({ data: item, isLoading: false, });
        } else {
          this.setState({ data: data[0].file, isLoading: false, })
        }
      }
      )
      .catch(error => console.log(error))
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Fragment>
        <Loading />
      </Fragment>
      )
    } else {
      return (
        <div className={style.wrapper}>
          <Header />
          <div className={style.section}>
            <div className={style.container}>
              <h2 className={style.heading}>ProductItemPage</h2>
              <div className={style.product}>
                <div className={style.outPic}>
                  <img className={style.pic} src={this.state.data} alt="product" />
                </div>
                <div className={style.description}>
                  <div className={style.text}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                 </div>
                  <input type="button" className={style.btn} value="buy" />
                </div>
              </div>
              <Link className={style.link} to='/' >Return to Product List</Link>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default ProductItemPage;

