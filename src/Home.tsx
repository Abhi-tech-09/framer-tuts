import {
  Link,
  Outlet,
  useLocation,
} from "react-router";

type AnimationRouteList = {
  name: string;
  route: string;
};
const animationsRoute: AnimationRouteList[] = [
  {
    route: "rotating-box",
    name: "Rotating box",
  },
  {
    route: "zoop",
    name: "Zoop",
  },{
    route: 'staggered-list',
    name: 'Staggered List'
  },
  {
    route:'view-slider',
    name: 'View Slider'
  }
];

const Home = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <div className="w-screen h-screen overflow-y-scroll text-center mx-auto pt-20">
          <ol className="space-y-5 text-left w-1/2 mx-auto">
            {animationsRoute.map((ani, index) => (
              <li key={index}>
                <Link className="block text-3xl link link-hover" to={ani.route}>
                  {ani.name}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Home;
