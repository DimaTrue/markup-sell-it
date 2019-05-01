import React, { Fragment } from 'react';
import style from './ProductItemPage.module.scss';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import Loading from '../CommonComponents/Loading/Loading';
import item from '../../img/item.jpg';

class ProductItemPage extends React.Component {

  async componentDidMount() {
    this.props.fetchProductItem(this.props.match.params.id)
  }
  render() {
    const { data, isLoading } = this.props;
    if (isLoading) {
      return (
        <Fragment>
          <Header />
          <Loading />
          <Footer />
        </Fragment>
      )
    } else {
      return (
        <div>
          <Header />
          <div className={style.section}>
            <div className={style.container}>
              <div className={style.product}>
                <div>
                  <img className={style.pic} src={data.images.length ? data.images[0].file : item} alt="product" />
                </div>
                <div className={style.description}>
                  <h2 className={style.title}>{data.theme || `Some title text must be here<br />maybe second  line`}</h2>
                  <div>
                    <strong>from</strong> <span className={style.userName} >Alis Kim</span> <span className={style.price}>Price: {data.price}$</span>
                  </div>
                  <p className={style.text}>{data.text || `Some description text from WYSIWYG editer`}</p>
                  <div>
                    Can be <strong>BOLD</strong> <i>italic</i>
                  </div>
                  <div className={style.listBox}>
                    <h4 className={style.subtitle}>Can have list:</h4>
                    <ul className={style.list}>
                      <li>- first</li>
                      <li>- second</li>
                    </ul>
                  </div>
                  <p><strong>And anything from WYSIWYG editor</strong></p>
                  <p className={style.someLine}><strong>Some line</strong></p>
                  <p className={style.someLine}>Some line</p>
                  <p className={style.someLine}><i>Some line</i></p>
                  <p><strong>Finished on this line.</strong></p>
                </div>
              </div>
              <div className={style.lowerLink}>
                <Link className={style.link} to='/' >Return to Product List</Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default ProductItemPage;

