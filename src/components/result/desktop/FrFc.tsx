"use client"
import { Category, Mode, Programme, Team, Type, Types } from "@/gql/graphql"
import { User2Icon } from "@/icons/home"
import { useEffect, useState } from "react"

interface Props {
  programs: Programme[]
  categories: Category[]
  teams: Team[]
}

export default function FirstRowFirstCard(props: Props) {
  const [sortedPrograms, setSortedPrograms] = useState<Programme[]>(props.programs)
  const [Search, setSearch] = useState<string>("")
  const [selectedProgram, setSelectedProgram] = useState<Programme | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [filteredSelectedProgram, setFilteredSelectedProgram] = useState<Programme | null>(selectedProgram)

  // sort the programs by createdAt a Date Type

  useEffect(() => {
    const sorted = props.programs?.sort((a, b) => {
      return (new Date(b?.createdAt as string).getTime() - new Date(a?.createdAt as string).getTime())
    })
    setSortedPrograms(sorted)
  }
    , [])

  const getClassBasedToppers = () => {
    console.log(props.programs);
    // props.programs.map((program:any)=>{
    // program.candidateProgramme.map((candiate:any)={

    // })
    // })

    var programmes = [
      {
        "id": 221,
        "name": "BRICK BALANCE",
        "model": "Sports",
        "mode": "NON_STAGE",
        "type": "SINGLE",
        "programCode": "RDST01",
        "resultEntered": true,
        "resultPublished": true,
        "candidateCount": 3,
        "category": {
          "name": "ALIYA"
        },
        "skill": {
          "name": "Sports"
        },
        "anyIssue": false,
        "candidateProgramme": [
          {
            "id": 7602,
            "point": 0,
            "position": null,
            "grade": null,
            "candidate": {
              "class": "F2",
              "imageId": "1oVID0mtYshPOUY4WGpiMwIcyyThGzPP7",
              "name": "Shaik Mustafi Rahman",
              "chestNO": "S415",
              "team": {
                "name": "Gazette",
                "id": 2
              }
            }
          },
          {
            "id": 7601,
            "point": 0,
            "position": null,
            "grade": null,
            "candidate": {
              "class": "F3",
              "imageId": "19fCLCX5GUuLJLZJCoi0LJhvdkOaUXW-Z",
              "name": "Afroz Ansari  ",
              "chestNO": "S402",
              "team": {
                "name": "Gazette",
                "id": 2
              }
            }
          },
          {
            "id": 7600,
            "point": 0,
            "position": null,
            "grade": null,
            "candidate": {
              "class": "HQ1",
              "imageId": "10dXs7xe2Yn2LHazjV0OF--UrxuejSxbd",
              "name": "Muhammed Irshad Ak",
              "chestNO": "S360",
              "team": {
                "name": "Gazette",
                "id": 2
              }
            }
          },

          {
            "id": 6991,
            "point": 3,
            "position": {
              "name": "First",
              "value": 1,
              "pointGroup": 10,
              "pointSingle": 3,
              "pointHouse": 15
            },
            "grade": null,
            "candidate": {
              "class": "HQ3",
              "imageId": null,
              "name": "Muhammed Suhail   Em",
              "chestNO": "S721",
              "team": {
                "name": "Tribune",
                "id": 4
              }
            }
          }
        ]
      },
      {
        "id": 440,
        "name": "GROUP SONG COMPOSITION & SINGING",
        "model": "Arts",
        "mode": "STAGE",
        "type": "GROUP",
        "programCode": "ATWU15",
        "resultEntered": true,
        "resultPublished": true,
        "candidateCount": 3,
        "category": {
          "name": "THANAWIYYA"
        },
        "skill": {
          "name": "Recitation"
        },
        "anyIssue": false,
        "candidateProgramme": [
          {
            "id": 12764,
            "point": 8,
            "position": {
              "name": "Third",
              "value": 3,
              "pointGroup": 5,
              "pointSingle": 1,
              "pointHouse": 7
            },
            "grade": {
              "name": "B",
              "pointGroup": 3,
              "pointSingle": 3,
              "pointHouse": 3
            },
            "candidate": {
              "class": "U7",
              "imageId": null,
              "name": "FAIZAN ASHRAF   NOORI",
              "chestNO": "C412",
              "team": {
                "name": "Gazette",
                "id": 2
              }
            }
          },
          {
            "id": 12763,
            "point": 10,
            "position": {
              "name": "Second",
              "value": 2,
              "pointGroup": 7,
              "pointSingle": 2,
              "pointHouse": 10
            },
            "grade": {
              "name": "B",
              "pointGroup": 3,
              "pointSingle": 3,
              "pointHouse": 3
            },
            "candidate": {
              "class": "U6",
              "imageId": null,
              "name": "MOHAMMED ZAID  ",
              "chestNO": "C816",
              "team": {
                "name": "Tribune",
                "id": 4
              }
            }
          },
          {
            "id": 12762,
            "point": 13,
            "position": {
              "name": "First",
              "value": 1,
              "pointGroup": 10,
              "pointSingle": 3,
              "pointHouse": 15
            },
            "grade": {
              "name": "B",
              "pointGroup": 3,
              "pointSingle": 3,
              "pointHouse": 3
            },
            "candidate": {
              "class": "U6",
              "imageId": null,
              "name": "GULAM MUSTAFA  ",
              "chestNO": "C218",
              "team": {
                "name": "Chronicle",
                "id": 1
              }
            }
          },
          {
            "id": 12456,
            "point": 0,
            "position": null,
            "grade": null,
            "candidate": {
              "class": "U7",
              "imageId": null,
              "name": "MOMIN MOHD UMAR ATEEQUE AHMAD   ",
              "chestNO": "C612",
              "team": {
                "name": "Herald",
                "id": 3
              }
            }
          }
        ]
      }, {
        "id": 352,
        "name": "FACE TO FACE ARB",
        "model": "Arts",
        "mode": "STAGE",
        "type": "GROUP",
        "programCode": "ATW18",
        "resultEntered": true,
        "resultPublished": true,
        "candidateCount": 2,
        "category": {
          "name": "THANAWIYYA"
        },
        "skill": {
          "name": "Presentation"
        },
        "anyIssue": false,
        "candidateProgramme": [
          {
            "id": 12507,
            "point": 8,
            "position": {
              "name": "Third",
              "value": 3,
              "pointGroup": 5,
              "pointSingle": 1,
              "pointHouse": 7
            },
            "grade": {
              "name": "B",
              "pointGroup": 3,
              "pointSingle": 3,
              "pointHouse": 3
            },
            "candidate": {
              "class": "6A",
              "imageId": "1bXBM6steUQB3iQw5i_34aov0er-Wl2ue",
              "name": "Nishdan",
              "chestNO": "C113",
              "team": {
                "name": "Chronicle",
                "id": 1
              }
            }
          },
          {
            "id": 12503,
            "point": 15,
            "position": {
              "name": "First",
              "value": 1,
              "pointGroup": 10,
              "pointSingle": 3,
              "pointHouse": 15
            },
            "grade": {
              "name": "A",
              "pointGroup": 5,
              "pointSingle": 5,
              "pointHouse": 5
            },
            "candidate": {
              "class": "U7",
              "imageId": null,
              "name": "MD SAIDUZZAMA  ",
              "chestNO": "C615",
              "team": {
                "name": "Herald",
                "id": 3
              }
            }
          },

        ]
      },
      {
        "id": 356,
        "name": "SPEECH AND SONG ARB",
        "model": "Arts",
        "mode": "STAGE",
        "type": "GROUP",
        "programCode": "ATW22",
        "resultEntered": true,
        "resultPublished": true,
        "candidateCount": 3,
        "category": {
          "name": "THANAWIYYA"
        },
        "skill": {
          "name": "Presentation"
        },
        "anyIssue": false,
        "candidateProgramme": [
          {
            "id": 12507,
            "point": 82,
            "position": {
              "name": "Third",
              "value": 3,
              "pointGroup": 5,
              "pointSingle": 1,
              "pointHouse": 7
            },
            "grade": {
              "name": "B",
              "pointGroup": 3,
              "pointSingle": 3,
              "pointHouse": 3
            },
            "candidate": {
              "class": "6A",
              "imageId": "1bXBM6steUQB3iQw5i_34aov0er-Wl2ue",
              "name": "Nishdan",
              "chestNO": "C113",
              "team": {
                "name": "Chronicle",
                "id": 1
              }
            }
          },
          {
            "id": 12503,
            "point": 5,
            "position": {
              "name": "First",
              "value": 1,
              "pointGroup": 10,
              "pointSingle": 3,
              "pointHouse": 15
            },
            "grade": {
              "name": "A",
              "pointGroup": 5,
              "pointSingle": 5,
              "pointHouse": 5
            },
            "candidate": {
              "class": "U7",
              "imageId": null,
              "name": "MD SAIDUZZAMA  ",
              "chestNO": "C615",
              "team": {
                "name": "Herald",
                "id": 3
              }
            }
          },

        ]
      }
    ]

    //   var toppers:any = {
    //     "Sports": {
    //         "ALIYA": [
    //             {
    //                 "name": "Shaik Mustafi Rahman",
    //                 "chestNo": "S415",
    //                 "point": 0
    //             },
    //             {
    //                 "name": "Afroz Ansari  ",
    //                 "chestNo": "S402",
    //                 "point": 0
    //             },
    //             {
    //                 "name": "Muhammed Irshad Ak",
    //                 "chestNo": "S360",
    //                 "point": 0
    //             },
    //             {
    //                 "name": "Muhammed Suhail   Em",
    //                 "chestNo": "S721",
    //                 "point": 3
    //             }
    //         ],
    //         "Recitation": {
    //             "THANAWIYYA": [
    //                 {
    //                     "name": "FAIZAN ASHRAF   NOORI",
    //                     "chestNo": "C412",
    //                     "point": 8
    //                 },
    //                 {
    //                     "name": "MOHAMMED ZAID  ",
    //                     "chestNo": "C816",
    //                     "point": 10
    //                 },
    //                 {
    //                     "name": "GULAM MUSTAFA  ",
    //                     "chestNo": "C218",
    //                     "point": 13
    //                 },
    //                 {
    //                     "name": "MOMIN MOHD UMAR ATEEQUE AHMAD   ",
    //                     "chestNo": "C612",
    //                     "point": 0
    //                 }
    //             ]
    //         },
    //         "Presentation": {
    //             "THANAWIYYA": [
    //                 {
    //                     "name": "Nishdan",
    //                     "chestNo": "C113",
    //                     "point": 90
    //                 },
    //                 {
    //                     "name": "MD SAIDUZZAMA  ",
    //                     "chestNo": "C615",
    //                     "point": 20
    //                 },

    //             ]
    //         }
    //     }
    // }


    let toppers: any = {}
    // Loop through the programmes array
    const sortedPrograms = props.programs.filter((program) => {
      return program.type == Types.Single
    });

    sortedPrograms.forEach((program: any) => {
      const skillName = program.skill.name;
      const categoryName = program.category.name;

      if (program.candidateProgramme) {
        // Loop through the candidateProgramme array
        program.candidateProgramme.forEach((candidateProgram: any) => {
          const { name, chestNO } = candidateProgram.candidate;

          const point = candidateProgram.point;

          // Check if the skill exists in toppers, if not, create it
          if (!toppers[skillName]) {
            toppers[skillName] = {};
          }

          // Check if the category exists in the skill, if not, create it
          if (!toppers[skillName][categoryName]) {
            toppers[skillName][categoryName] = [];
          }
          console.log((toppers as any)[skillName][categoryName]);


          // if (toppers[skill] && toppers[skill][category]) {
          //   const candidate = toppers[skill][category].find((c) => c.chestNo === chestNo);
          //   if (candidate) {
          //     candidate.point += additionalPoints;
          //   }
          // }

          // Push the candidate data to the appropriate category and skill
          toppers[skillName][categoryName].push({
            name,
            chestNo: chestNO,
            point: point,
          });


        });
      }
    });

    function sortCandidatesByPoints(candidates: any) {
      return candidates.sort((a: any, b: any) => b.point - a.point);
    }

    // Loop through the toppers object and sort candidates within each category
    for (const skill in toppers) {
      for (const category in toppers[skill]) {
        toppers[skill][category] = sortCandidatesByPoints(toppers[skill][category]);
      }
    }

    console.log(toppers);


  }
  // getClassBasedToppers()



  return (
    <>
      <div className="h-[43rem] w-[50%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
        {/* heading */}
        <div className="h-12">
          <h1 className="text-3xl font-semibold px-5 my-4">Programs</h1>
          <hr className="border" />
        </div>
        {/* sort buttons */}
        <div className="flex items-center gap-4 px-5 h-16">
          {/* All */}
          <select onChange={(e) => {
            // filter the programs by category
            if (e.target.value === 'all') {
              setSortedPrograms(props.programs)
            }
            else {
              const filtered = props.programs?.filter((program) => {
                return program.category?.name === e.target.value
              })
              setSortedPrograms(filtered)
            }
          }} name="" id="" className="py-3 px-4  block  border-gray-200 rounded-full text-sm cursor-pointer">
            <option value={'all'} key={1000} >All Category</option>
            {
              props.categories?.map((category, index) => {
                return (
                  <option key={index} value={category.name as string} >{category.name}</option>
                )
              })
            }
          </select>
          {/* Search */}
          <form className="w-full rounded-xl overflow-hidden h-10 border border-primary flex">
            <div className="relative flex items-center w-full">
              <div className=" flex items-center pl-3 pointer-events-none cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 cursor-pointer "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {/* <input  */}
              <input value={Search} onChange={(e) => {
                setSearch(e.target.value)
                const filtered = props.programs?.filter((program) => {
                  return program.name?.toLowerCase().includes(e.target.value.toLowerCase()) || program.programCode?.toLowerCase().includes(e.target.value.toLowerCase())
                })
                setSortedPrograms(filtered)
              }} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm"></input>
            </div>
          </form>
        </div>
        <hr className="border" />
        {/* List of programs */}
        <div className="h-[75%] min-h-[75%] overflow-y-auto flex flex-col gap-2 items-center px-3 mt-3">
          {/* list 1 */}
          {
            sortedPrograms &&
            sortedPrograms.map((program, index) => {
              return (
                <div key={index} onClick={() => {
                  // firstly sort the candidates by their point
                  program?.candidateProgramme?.sort((a, b) => {
                    return (b?.point as number) - (a?.point as number)
                  })
                  setSelectedProgram(program)
                  setFilteredSelectedProgram(program)
                }} className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl px-3 cursor-pointer">
                  <p className="font-bold w-[25%]">{program.programCode}</p>
                  <p className="w-[60%]">{program.name?.toUpperCase()}</p>
                  <p className="w-[20%]">{program.category?.name}</p>
                </div>
              )
            })
          }

        </div>
        {/* end of lists */}
      </div>
      <div className="h-[43rem] w-[50%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
        {/* heading */}
        <div className="h-12">
          <h1 className={`font-semibold px-5 transition-all duration-500 ${selectedProgram ? 'text-2xl' : 'my-4 text-3xl'}`}>Results</h1>
          {
            <div className="flex">
              <h1 className="text-sm font-semibold px-5 ">{selectedProgram?.name}</h1>
              <h1 className="text-sm font-semibold px-5 mb-2">{selectedProgram?.category?.name}</h1>
            </div>
          }
          <hr className="border" />
        </div>
        {/* sort buttons */}
        <div className="flex items-center gap-1 pl-5 pr-10 h-16 flex-wrap">
          {/* All */}
          <button onClick={() => {
            setSelectedTeam(null)
            setFilteredSelectedProgram(selectedProgram)
          }} className={`
            ${selectedTeam == null ? 'bg-primary ' : 'text-white '
            }  h-6 border  rounded-xl  flex items-center justify-center`}
          >
            <p className={`
         ${selectedTeam == null ? 'text-white' : 'text-primary'
              } px-2 font-medium text-sm`}>All</p>
          </button>
          {
            props.teams?.map((team, index) => {
              return (
                <button onClick={() => {
                  setSelectedTeam(team)
                  const fitered = selectedProgram?.candidateProgramme?.filter((candidate) => {
                    return candidate.candidate?.team?.name === team.name
                  }
                  )
                  setFilteredSelectedProgram({ ...selectedProgram, candidateProgramme: fitered } as Programme)
                }} className={`
            ${selectedTeam?.name == team.name ? 'bg-primary ' : 'text-white '
                  }  h-6 border  rounded-xl  flex items-center justify-center`}
                >
                  <p className={`
         ${selectedTeam?.name == team.name ? 'text-white' : 'text-primary'
                    } px-2 font-medium text-sm`}>{team.name}</p>
                </button>
              )
            })
          }
          {/* The End */}
        </div>
        <hr className="border" />
        {/* List of programs */}
        <div className="h-[75%] min-h-[75%] overflow-y-auto flex flex-col gap-2 items-center px-5 mt-3">
          {/* list 1 */}
          {filteredSelectedProgram ?
            (
              filteredSelectedProgram.candidateProgramme?.map((candidate, index) => {
                if (!candidate.position && !candidate.grade) {
                  return <div></div>
                }
                return (
                  <div className="flex w-full items-center h-14 relative p-5">
                    {candidate.candidate?.imageId ? <img
                      src={`https://drive.google.com/uc?export=view&id=${candidate.candidate?.imageId}`}
                      alt=""
                      className="h-10 w-10 rounded-full absolute border -ml-4"
                    /> :
                      <User2Icon className="h-10 w-10 rounded-full absolute border -ml-4 fill-secondary bg-white p-2" />

                    }
                    <div className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl">
                      <p className="ml-8 w-[15%] font-bold">{candidate.position?.value}{candidate.position?.value == 1 ? 'st' : candidate.position?.value == 2 ? 'nd' : candidate.position?.value == 3 ? 'rd' : ''}  </p>
                      <p className=" ml-4 w-[10%]"> {candidate.candidate?.chestNO}</p>
                      <p className=" ml-4 w-[50%]">{selectedProgram?.type == Types.Group ?
                        candidate.candidate?.name + " & team" :
                        selectedProgram?.type == Types.Single ?
                          candidate.candidate?.name :
                          candidate.candidate?.team?.name
                      }</p>
                      <p className=" ml-4 w-[20%]">{candidate.candidate?.team?.name}</p>
                      <p className=" ml-4 w-[8%]">{candidate.grade?.name}</p>
                    </div>

                  </div>
                )
              }
              )
            )
            :
            //    <div className="flex w-full items-center h-14 relative">

            //    <User2Icon className="h-12 w-12 rounded-full absolute border -ml-4 fill-secondary bg-white p-2"/>
            //    <div className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl justify-around pl-5">
            //      <p ></p>
            //      <p>S123</p>
            //      <p>Muahammed Arshad</p>
            //      <p>Chronicle</p>
            //      <p>A</p>
            //    </div>
            //  </div>
            <div>
              Please select a program to view results
            </div>

          }
        </div>
        {/* end of lists */}
      </div>
    </>
  )
}