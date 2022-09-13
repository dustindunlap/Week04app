import Head from 'next/head';
import {getAllIds, getData} from '../lib/data.js';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
  <article class="card col-6">
    <div class="card-body">
      <h5 class="card-title">{itemData.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
      <p class="card text">{itemData.birthday}</p>
      <a href={'mailto:' + itemData.email} class="card-link">{itemData.email}</a>
    </div>
  </article>
    );
}