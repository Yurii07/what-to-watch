import React from 'react'
import { useParams } from 'react-router';

import PageHeader from '../components/page-headr/PageHeader';
import Header from '../components/header/Header';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {
  const { category } = useParams();
  console.log('🔥 ~ file: Catalog.jsx ~ line 12 ~ Catalog ~ category', category);
  return (
    <>
      <Header />
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog