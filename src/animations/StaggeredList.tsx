import { motion } from "motion/react";

const items: string[] = [
  "Know thyself.",
  "Time is a river.",
  "I think, therefore I am.",
  "Happiness is a choice.",
  "Life is a journey.",
  "Silence is golden.",
  "Change is constant.",
  "Wisdom begins in wonder.",
  "To love is to live.",
  "Be here now.",
  "The unexamined life is not worth living.",
  "Truth is power.",
  "Less is more.",
  "To err is human.",
  "Fear is the mind-killer.",
  "Freedom is a state of mind.",
  "Simplicity is the ultimate sophistication.",
  "All is one.",
  "What we think, we become.",
  "Energy flows where attention goes.",
  "Life is suffering.",
  "Pain is inevitable, suffering is optional.",
  "Harmony comes from balance.",
  "Injustice anywhere is a threat to justice everywhere.",
  "Do unto others as you would have them do unto you.",
  "The only constant is change.",
  "Knowledge is power.",
  "Wherever you go, there you are.",
  "No man steps in the same river twice.",
  "Hope is a waking dream.",
  "Love conquers all.",
  "Without struggle, there is no progress.",
  "This too shall pass.",
  "Nothing is permanent.",
  "The journey is the destination.",
  "Be the change you wish to see.",
  "The mind is everything.",
  "Happiness depends upon ourselves.",
  "You only lose what you cling to.",
  "Do what you can with what you have.",
  "To know, is to know you know nothing.",
  "The only true wisdom is in knowing you know nothing.",
  "What is right is not always popular.",
  "An eye for an eye makes the whole world blind.",
  "In the middle of difficulty lies opportunity.",
  "Actions speak louder than words.",
  "Man is the measure of all things.",
  "The world is a stage.",
  "Knowledge begins with wonder.",
  "Life is but a dream.",
];

const StaggeredList = () => {

  return (
    <div className="h-screen w-screen text-left overflow-x-hidden space-y-10">
      {items.map((item, index) => {
        return (
          <motion.p
            className="pl-5 pt-10 block"
            viewport={{ once: true }}
            variants={{
              initial: {
                x: "-100%",
                y: 100,
                opacity: 0,
              },
              appear: {
                x: 0,
                y: 0,
                opacity: 1,
              },
            }}
            initial="initial"
            whileInView="appear"
            transition={{
              duration: 0.5,
              delay: index > 9 ? 0.02 : index * 0.1,
              type: "spring",
              ease: "easeIn",
              damping: 15,
            }}
          >
            {item}
          </motion.p>
        );
      })}
    </div>
  );
};

export default StaggeredList;
