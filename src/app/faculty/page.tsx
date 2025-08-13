"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CopyrightFooter from "../components/CopyrightFooter";

export default function FacultyPage() {
  const departments = [
    {
      name: "Senior Leadership",
      members: [
        {
          name: "Prof. Dr. Muhammad Yaseen Aafaqi",
          designation: "Principal",
          qualification: "Ph. D"
        }
      ]
    },
    {
      name: "Vice Principals",
      members: [
        {
          name: "Dr. Asad Faiz",
          designation: "Vice Principal (Administration)",
          qualification: "Associate Professor"
        },
        {
          name: "Mr. Naeem-ur-Raheem",
          designation: "Vice Principal (Academics)",
          qualification: "Associate Professor"
        },
        {
          name: "Dr. Saeed Ahmed",
          designation: "Vice Principal (Evening Shift)",
          qualification: "Associate Professor"
        }
      ]
    },
    {
      name: "Administration",
      members: [
        {
          name: "Mrs. Kausar Shaheen",
          designation: "Senior Headmistress",
          qualification: ""
        },
        {
          name: "Mr. Imtiaz Ali Bukhari",
          designation: "Teachers' Coordinator IGCSE",
          qualification: ""
        }
      ]
    },
    {
      name: "Department of English",
      members: [
        {
          name: "Mr. Ghayoor Hussain",
          designation: "Associate Professor (HOD)",
          qualification: "M.A English"
        },
        {
          name: "Mr. Sohail Mughal",
          designation: "Lecturer",
          qualification: "M.A English"
        },
        {
          name: "Mr. Adeel Azmat",
          designation: "Lecturer",
          qualification: "M. Phil"
        },
        {
          name: "Mr. Umer Farooq Mir",
          designation: "Assistant Professor",
          qualification: "M.A English"
        },
        {
          name: "Mr. Hamid Shehzad",
          designation: "Assistant Professor",
          qualification: "M. Phil"
        },
        {
          name: "Mr. M. Hafeez Ullah",
          designation: "Lecturer",
          qualification: "M.A English, M.A Philosophy"
        }
      ]
    },
    {
      name: "Department of Urdu",
      members: [
        {
          name: "Dr. Muhammad Yaseen Aafaqi",
          designation: "Professor",
          qualification: "Ph.D"
        },
        {
          name: "Dr. Saeed Ahmed",
          designation: "Associate Professor",
          qualification: "Ph.D"
        },
        {
          name: "Mr. Zahoor Ahmed",
          designation: "Assistant Professor",
          qualification: "M.Phil"
        },
        {
          name: "Mr. Shahid Iqbal",
          designation: "Assistant Professor",
          qualification: "M. Phil (in progress)"
        },
        {
          name: "Mr. Ibad Ahmed",
          designation: "Lecturer",
          qualification: "M.A Urdu"
        },
        {
          name: "Dr. Asad Faiz",
          designation: "Associate Professor",
          qualification: "Ph.D"
        },
        {
          name: "Mr. Irfanullah (HOD)",
          designation: "Associate Professor",
          qualification: "M. Phil"
        },
        {
          name: "Mr. Liaqat Pervaiz",
          designation: "Assistant Professor",
          qualification: "M.A Urdu"
        },
        {
          name: "Mr. Touqeer Hussain",
          designation: "Lecturer",
          qualification: "M.A Urdu"
        }
      ]
    },
    {
      name: "Department of Biology",
      members: [
        {
          name: "Dr. Kashif Ali (HOD)",
          designation: "Assistant Professor",
          qualification: "M.Sc Zology, M. Phil"
        },
        {
          name: "Mr. Shafqat Rasool",
          designation: "Lecturer",
          qualification: "M.Sc Zology, M.Ed"
        },
        {
          name: "Mr. Ashiq Nawaz",
          designation: "Assistant Professor",
          qualification: "M.Sc Botany"
        },
        {
          name: "Mr. Naeem Akhtar",
          designation: "Lecturer",
          qualification: "M. Phil, M.A Education"
        }
      ]
    },
    {
      name: "Department of Chemistry",
      members: [
        {
          name: "Mr. Hilal Ahmed Wani (HOD)",
          designation: "Associate Professor",
          qualification: "M.Sc Chemistry"
        },
        {
          name: "Mr. Muhammad Abid Khan",
          designation: "Assistant Professor",
          qualification: "M.Sc Chemistry, M.Ed"
        },
        {
          name: "Mr. Zia Ullah",
          designation: "Lecturer",
          qualification: "M.Sc Chemistry"
        },
        {
          name: "Mr. Tariq Mehmood",
          designation: "Assistant Professor",
          qualification: "M.Sc Applied Chemistry"
        },
        {
          name: "Mr. Painda Khan",
          designation: "Lecturer",
          qualification: "M.Sc Chemistry"
        }
      ]
    },
    {
      name: "Department of Physics",
      members: [
        {
          name: "Mr. Zahid Akbar (HOD)",
          designation: "Associate Professor",
          qualification: "M. Phil"
        },
        {
          name: "Mr. Zulfiqar Ali",
          designation: "Assistant Professor",
          qualification: "M.Sc Physics"
        },
        {
          name: "Mr. Irfan Ullah Khan",
          designation: "Assistant Professor",
          qualification: "M.Sc Physics"
        },
        {
          name: "Mr. Mushtaq Hussain",
          designation: "Lecturer",
          qualification: "M.Sc Physics"
        },
        {
          name: "Mr. Ghulam Murtaza",
          designation: "Assistant Professor",
          qualification: "M.Sc Physics"
        },
        {
          name: "Mr. Ateeq-ur-Rehman",
          designation: "Assistant Professor",
          qualification: "M. Phil"
        },
        {
          name: "Mr. Muhammad Ashraf",
          designation: "Lecturer",
          qualification: "M.Sc Physics"
        },
        {
          name: "Mr. Muhammad Zubair",
          designation: "Lecturer",
          qualification: "M. Phil"
        }
      ]
    },
    {
      name: "Department of Computer Science",
      members: [
        {
          name: "Mr. Ghazi Hussain Shah (HOD)",
          designation: "Assistant Professor",
          qualification: "M.Sc Computer Science"
        },
        {
          name: "Mr. Muhammad Rashid Ch.",
          designation: "Assistant Professor",
          qualification: "BS (Hons)"
        },
        {
          name: "Mr. Ghulam Farooq Laghari",
          designation: "Assistant Professor",
          qualification: "M.Sc Computer Science"
        }
      ]
    },
    {
      name: "Department of Mathematics",
      members: [
        {
          name: "Mr. Muhammad Aftab Tariq",
          designation: "Associate Professor (Performing duty as AEO in FDE)",
          qualification: "M. Sc"
        },
        {
          name: "Mr. Asad Ali Shah",
          designation: "Assistant Professor",
          qualification: "M.Sc Mathematics"
        },
        {
          name: "Mr. Muzammil Sheikh",
          designation: "Lecturer",
          qualification: "M.Sc Mathematics"
        },
        {
          name: "Mr. Aftab Ahmed Khan",
          designation: "Lecturer",
          qualification: "M.Phil Mathematics"
        },
        {
          name: "Mr. Moazzam Hussain (HOD)",
          designation: "Assistant Professor",
          qualification: "M.Sc Mathematics"
        },
        {
          name: "Mr. Tufail Abbas",
          designation: "Assistant Professor",
          qualification: "M.Sc Mathematics"
        },
        {
          name: "Mr. Ali Raza",
          designation: "Lecturer",
          qualification: "M.Sc Mathematics"
        },
        {
          name: "Mr. Muhammad Aslam",
          designation: "Lecturer",
          qualification: "M.Sc Mathematics"
        }
      ]
    },
    {
      name: "Department of Islamic Studies / Arabic",
      members: [
        {
          name: "Mr. Nadeem Abbas (HOD)",
          designation: "Associate Professor",
          qualification: "M. Phil"
        },
        {
          name: "Dr. Muhammad Sarwar Hijazi",
          designation: "Assistant Professor",
          qualification: "Ph. D"
        },
        {
          name: "Qari Muhammad Naseem",
          designation: "Lecturer",
          qualification: "M.A Islamiyat, M.A Arabic, B.Ed"
        },
        {
          name: "Mr. Muneeb Ur Rehman",
          designation: "Lecturer",
          qualification: "M.A Arabic"
        },
        {
          name: "Mr. Ibrahim Khalil",
          designation: "Assistant Professor",
          qualification: "M.A"
        },
        {
          name: "Mr. Abdul Raqeeb",
          designation: "Assistant Professor",
          qualification: "M.A, M.Ed"
        },
        {
          name: "Mr. Abdul Mateen Kakar",
          designation: "Assistant Professor",
          qualification: "M.A Islamiat"
        },
        {
          name: "Qari Saeed ur Rehman",
          designation: "Lecturer",
          qualification: "M.A Islamiyat, M.A Arabic"
        }
      ]
    },
    {
      name: "Department of Pakistan Studies",
      members: [
        {
          name: "Mr. Imtiaz Ahmed (HOD)",
          designation: "Associate Professor",
          qualification: "M. Phil"
        },
        {
          name: "Mr. Murad Ali Khan",
          designation: "Lecturer",
          qualification: "M.Sc Geography"
        },
        {
          name: "Mr. Rashid Mehmood Kiyani",
          designation: "Lecturer",
          qualification: "M.Sc Geography"
        }
      ]
    },
    {
      name: "Department of Physical Education",
      members: [
        {
          name: "Mr. Muhammad Obaid",
          designation: "ADPE",
          qualification: "M.Sc Physical Education"
        },
        {
          name: "Mr. Sarfraz Ahmad",
          designation: "Band Master",
          qualification: ""
        }
      ]
    },
    {
      name: "Library",
      members: [
        {
          name: "Mr. Azeem Khan Marwat",
          designation: "Librarian",
          qualification: ""
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner Section */}
      <section className="relative bg-slate-800 text-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Our</span>
              <span className="text-teal-400"> Faculty</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated team of educators who bring years of experience, expertise, and passion 
              to nurture young minds. Our faculty members are committed to academic excellence and 
              the holistic development of our students.
            </p>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Faculty Listing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {departments.map((department, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-slate-800 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">{department.name}</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {department.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="flex items-start space-x-4 p-4 rounded-lg border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-grow min-w-0">
                          <h3 className="font-semibold text-slate-800 text-sm mb-1 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-teal-600 text-sm font-medium mb-1">
                            {member.designation}
                          </p>
                          {member.qualification && (
                            <p className="text-slate-600 text-sm">
                              {member.qualification}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CopyrightFooter />
    </div>
  );
}