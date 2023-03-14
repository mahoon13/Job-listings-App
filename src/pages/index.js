import Header from "../../components/Header.js";
import JobsList from "../../components/JobsList.js";
import { getAllJobs } from "../../lib/data";
import Layout from "./layout";
import { useReducer } from "react";

export const Filters_ACTIONS = {
  ADD_FILTER: "add_filter",
  REMOVE_FILTER: "remove_filter",
  CLEAR_FILTERS: "clear_filters",
};

export default function Home({ jobs }) {
  const [filters, dispatch] = useReducer((filters, action) => {
    switch (action.type) {
      //add new filter to the filters array
      case Filters_ACTIONS.ADD_FILTER:
        //prevent same filters in array
        let filter = action.payload.filter;
        if (filters.indexOf(filter) !== -1) return filters;
        return [...filters, filter];

      //remove filter by its name from state array
      case Filters_ACTIONS.REMOVE_FILTER:
        return filters.filter((name) => name !== action.payload.filter);

      //remove all filters
      case Filters_ACTIONS.CLEAR_FILTERS:
        return [];
    }
  }, []);

  return (
    <Layout>
      <Header />

      <JobsList jobs={jobs} filters={filters} changeFilters={dispatch} />
    </Layout>
  );
}

export function getStaticProps() {
  const data = getAllJobs();

  return { props: { jobs: data } };
}
