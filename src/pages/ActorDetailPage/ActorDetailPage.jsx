import React, {useEffect} from 'react';
import './ActorDetailPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTOR_REQUEST} from "../../actions/actors";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ActorDetailPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const isActorLoading = useSelector((state) => state.actors.loading);
  const actor = useSelector((state) => state.actors.actor);

  useEffect(() => {
    dispatch({
      type: GET_ACTOR_REQUEST,
      payload: params.id
    })
  }, [params.id])

  return (
    <main className='actor'>
      <BreadCrumbs name={actor.name}/>
      {isActorLoading
        ? <Loader/>
        : <ItemDetail item={actor} itemPhoto='characters'/>
      }
    </main>
  );
};

export default ActorDetailPage;