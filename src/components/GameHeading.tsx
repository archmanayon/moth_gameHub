import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const z_genre = genres?.results.find((r) => r.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const z_platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${z_platform?.name || ""} ${z_genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
