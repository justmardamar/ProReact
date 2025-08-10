import React,{useState} from "react";
import CardFilm from "./CardFilm";
import GenreSection from '../home/HomeComponent/GenreSection'
import SearchFilm from "./SearchFilm";

export default function FetchFilm({
    title,
    movies,
    page,
    totalPages,
    onPageChange,
}) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <>
        <section className="p-6">
          {/* Search */}
          <SearchFilm pagination={page}/>

          <h2 className="text-2xl font-bold mb-6">{title}</h2>

          <GenreSection/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
              >
                <CardFilm
                  filmImg={movie.poster_path}
                  filmTitle={movie.title}
                  filmPopularity={movie.popularity}
                  filmOverview={movie.overview}
                  filmTanggal={movie.release_date}
                  detailFilm={movie.id}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="list flex gap-2 p-6">
          {pages.map((p, index) => (
            <li
              key={index}
              onClick={() => onPageChange?.(p)}
              className={`px-3 py-1 cursor-pointer rounded ${
                p === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {p}
            </li>
          ))}
        </div>
      </>
    );
}
