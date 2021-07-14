import { Button } from "../components/Button";
interface Genres {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreItemsProps {
  genres: Genres[];
  activeId: Function;
  selectedGenreId: number;
}

export function SideBar(props: GenreItemsProps) {
  const handleClickButton = (id: number) => props.activeId(id);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
