import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import certificateUe from "@/public/images/Estee Certificate UE.jpg";
import certificateLe from "@/public/images/Estee Certificate LE.jpg";
import esteeImage from "@/public/images/Estee.jpg";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the Montessori Elementary Homeschool Program",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="m-2">
        <h1 className="text-2xl">About the Teacher</h1>
        <Image
          alt="Estee, The Teacher"
          src={esteeImage}
          className="float-left mr-2 mt-5 h-auto w-1/2"
          priority
        />
        <p className="pt-3">
          Hi! I’m Estee. I live with my spouse, Roni, and our son, Yonatan, who
          is the inspiration for - and the first student of - our Montessori
          homeschool.
        </p>
        <p className="pt-3">
          Teaching runs in my family: my mother and sisters are all teachers,
          and so are other members of my family. Apparently, teaching also runs
          in my veins: my most enjoyable experiences are marveling at a natural
          phenomenon with my students, witnessing an “Aha!” light-bulb moment,
          or watching students deeply immersed in their work. I develop
          meaningful relationships with my students, and it is immensely
          rewarding and humbling for me to be there during their school years, a
          pivotal time in their lives, and watch as they develop and grow.
        </p>
        <p className="pt-3">
          When I started teaching, I realized that a large classroom isn’t for
          me. I worked successfully in special education for several years, and
          then took a break from teaching, during which I worked in welfare. In
          2016 I began teaching in a small elementary school, only to have that
          cut short in 2020 by Covid lockdown. When I saw my son (then 7)
          thriving at home, I changed directions again. I studied and became{" "}
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="cursor-pointer text-blue-500 underline-offset-4 hover:underline"
              >
                certified
              </button>
            </DialogTrigger>
            <DialogContent className="min-w-[70%]">
              <DialogTitle className="text-center">
                Montessori Diplomas
              </DialogTitle>
              <DialogDescription className="text-center">
                Lower/Upper Elementary Certifications
              </DialogDescription>
              <div className="flex flex-col flex-wrap gap-2 lg:grid lg:grid-cols-2">
                <Image
                  src={certificateLe}
                  alt="Lower Elementary Teaching Certificate"
                />
                <Image
                  src={certificateUe}
                  alt="Upper Elementary Teaching Certificate"
                />
              </div>
            </DialogContent>
          </Dialog>{" "}
          as a Montessori teacher for ages 6-9 and 9-12, furnished and equipped
          a home classroom, and threw myself wholeheartedly into homeschooling.
          This is a labor of love for me, and I look forward to welcoming more
          students to our little homeschool group!
        </p>

        <div className="mt-10">
          <h1 className="text-2xl">Our Homeschool Environment</h1>
          <p className="pt-3">
            Our homeschool is located in our home in Bloomfield, CT. The
            upstairs floor (two rooms and a bathroom) have been converted into a
            fully-equipped Montessori Elementary classroom. The space provides
            ample table and floor space for work, and there is a dedicated area
            for each of the subjects learned. There are reading books, reference
            books, Montessori materials and manipulatives, maps, models, charts,
            arts and crafts supplies, sports equipment, and everything students
            might need during their school day.
          </p>
          <p className="pt-3">
            Outside is a large lawn area that we use for recess and P.E (weather
            permitting). There is plenty of space for children to explore and
            play, and there is an assortment of games, toys, and sports
            equipment.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl">Going Out</h1>
          <p className="pt-3">
            Every other week students volunteer at a local nature center,
            feeding some of the permanent resident reptiles. Volunteer work
            fosters responsibility, connection, and a sense of care for others
            that cannot be taught in a classroom.
          </p>
          <p className="pt-3">
            Besides volunteering at the nature center, we typically spend one
            day a week outside of the classroom. Our outings range from
            excursions to nearby local parks, nature hikes, libraries, and
            visitor centers, to trips to museums, educational programs, art
            galleries, and historical sites.
          </p>
        </div>
      </div>

      <div className="m-2">
        <h1 className="text-2xl">Why Montessori?</h1>
        <p className="pt-3">
          At the heart of Montessori philosophy is the concept of “following the
          child”. Translated into practical terms, this means providing students
          with choices, allowing them to lead activities and projects
          (independently or with some assistance), and tailoring presentations
          and work to the individual student’s preparedness.
        </p>
        <p className="pt-3">
          The Montessori individually paced curriculum challenges children
          academically, yet preserves their well-being, confidence, and sense of
          self. Students learn to question, think critically, and take
          responsibility for their learning - skills that will support them in
          later education and in life.
        </p>
        <p className="pt-3">
          As at all Montessori levels, the Elementary program is based on the
          belief that children learn best through movement and work with their
          hands, and it provides cognitive, social, and emotional support to
          help them reach their full potential.
        </p>
        <p className="pt-3">
          The Montessori Elementary curriculum is designed to address the needs
          of students as they enter a new period of development (the second
          plane, ages 6-12,) characterized by a transition from concrete to
          abstract thinking; growing interest in socialization; thinking and
          memory that is enhanced by creativity and imagination; and a growing
          interest in fairness, social justice, and compassion.
        </p>

        <div className="mt-10">
          <h1 className="text-2xl">Our School Day</h1>
          <p className="pt-3">
            We begin the day with a group meeting that can include reading about
            what is happening in nature right now, a mindfulness activity, or a
            talk about a topic that students are interested in exploring.
          </p>
          <p className="pt-3">
            Students then complete their daily responsibilities - language
            and/or math practice.
          </p>
          <p className="pt-3">
            The rest of the day is dedicated to lessons and choice work. Lessons
            are presented by me (to the group or individually); choice work is
            students choosing and completing work on their own (based on what
            they’ve learned). Students can also request lessons on any topic
            they are curious about.
          </p>
          <p className="pt-3">
            The day includes lunch in our kitchen dining area and a 30-minute
            recess. Students are free to independently have a snack whenever
            they choose throughout the day.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl">Affordability & Flexibility</h1>
          <p className="pt-3">
            I view teaching as a mission and, as such, take it very seriously; I
            spend a lot of time, money, and effort researching, designing and
            preparing the environment, learning materials, books, lessons, and
            activities. The costs are high, but I am committed to making
            Montessori education accessible, and therefore keep tuition lower
            than that of private schools. You can rest assured that no expense
            is spared in creating a stimulating and nurturing experience for
            each and every student.
          </p>
          <p className="pt-3">
            As a homeschool mom, I know that flexibility is a top priority. That
            is why you can enroll your child full-time, or choose a part-time
            schedule that suits your family. I am happy to work with you to find
            the option that is best for both you and your child.
          </p>
        </div>
      </div>
    </div>
  );
}
