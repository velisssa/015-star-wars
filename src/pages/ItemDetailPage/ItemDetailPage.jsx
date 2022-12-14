import React, {useEffect} from 'react';
import './ItemDetailPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import SceletonDetail from "../../components/SceletonDetail/SceletonDetail";

const ItemDetailPage = () => {

  const params = useParams();
  let itemName = params.name;

  const dispatch = useDispatch();
  const isItemLoading = useSelector((state) => state[itemName].loading);
  const item = useSelector((state) => state[itemName][itemName.slice(0, -1)]);


  let getRequest = `GET_${itemName.slice(0, -1).toUpperCase()}_REQUEST`

  useEffect(() => {
    dispatch({
      type: getRequest,
      payload: params.id,
    })
  }, [params.id, params.name])

  return (
    <main className='item'>
      <div className='top container'>
        <BreadCrumbs name={item.name || item.title}/>
      </div>
      {isItemLoading
        ? <SceletonDetail/>
        : <ItemDetail item={item} itemPhoto={itemName}/>
      }
    </main>
  );
};

export default ItemDetailPage;