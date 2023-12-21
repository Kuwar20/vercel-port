// links
import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:kuwarx1@gmail.com"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/kuwar-singh/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/Kuwar20"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
