import { Flex } from "@chakra-ui/react";
import JobCard from "./JobCard";
import FiltersBar from "./FiltersBar";

export default function JobsList({ jobs, filters, changeFilters }) {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row", lg: "column" }}
      flexWrap={{ md: "wrap" }}
      justifyContent={{ md: "center" }}
      gap={"3rem"}
      py={"3rem"}
      px={"2rem"}
      width={"fit-content"}
      mx={"auto"}
      mt={filters.length > 0 && "-7.5rem"}
      zIndex={"50"}
      position={"relative"}
    >
      {
        //if filters array is not empty show filters bar
        filters.length > 0 && (
          <FiltersBar filters={filters} changeFilters={changeFilters} />
        )
      }

      {jobs.map((job) => {
        //all job tags in one array
        var tags = [job.role, job.level, ...job.languages, ...job.tools];

        //filter jobs by their tags
        let hidden = false;

        filters.forEach((filter) => {
          let tagPlace = tags.indexOf(filter);
          //if job item dont have one of fillter tags set hidden to true
          if (tagPlace === -1) {
            hidden = true;
            return;
          } else {
            //set selected tag filtered to true
            tags[tagPlace] = { tag: tags[tagPlace], filtered: true };
          }
        });

        tags = tags.map((tag) =>
          typeof tag === "string" ? { tag, filtered: false } : tag
        );

        if (!hidden) {
          return (
            <JobCard
              key={job.id}
              detail={job}
              tags={tags}
              changeFilters={changeFilters}
            />
          );
        }
      })}
    </Flex>
  );
}
