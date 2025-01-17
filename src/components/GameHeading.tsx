import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuerySort from "../store";

const GameHeading = () => {
  const genreID = useGameQuerySort((s) => s.gameQuery.genreId);
  const genre = useGenre(genreID);

  const platformId = useGameQuerySort((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
