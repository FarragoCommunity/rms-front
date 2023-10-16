import GalleryHeader from "@/components/GalleryHeader";
import Header from "@/components/Header";
import NOT_AV from "@/components/NOT_AV";
import ResultHeader from "@/components/ResultHeader";
import FirstRowFirstCard from "@/components/result/desktop/FrFc";
import FirstRowSecondCard from "@/components/result/desktop/FrSc";
import DesktopSidebar from "@/components/result/desktop/Sidebar";
import SecondRowFirstCard from "@/components/result/desktop/SrFc";
import SecondRowSecondCard from "@/components/result/desktop/SrSc";
import OverallResults from "@/components/result/mobile/OverallResults";
import Programs from "@/components/result/mobile/Programs";
import QuickOverview from "@/components/result/mobile/QuickOverview";
import Results from "@/components/result/mobile/Results";
import Toppers from "@/components/result/mobile/Toppers";
import {
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
  GetPublishedProgrammesDocument,
  GetPublishedProgrammesQuery,
  GetPublishedProgrammesQueryVariables,
  GetAllSkillsDocument,
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables,
  GetAllTeamsDocument,
  GetAllTeamsQueryVariables,
  GetAllTeamsQuery,
  Team,
  Programme,
  Category,
  CategorBasedToppersQuery,
  CategorBasedToppersQueryVariables,
  CategorBasedToppersDocument,
  TotalProgramsCountQuery,
  TotalProgramsCountQueryVariables,
  TotalProgramsCountDocument,
} from "@/gql/graphql";
import { Menu2Icon } from "@/icons/home";
import { SectionIcon } from "@/icons/navs";
import { API_KEY } from "@/lib/env";
import { getUrqlClient } from "@/lib/urql";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  const { client } = getUrqlClient();
  const result = await client.query<
    GetPublishedProgrammesQuery,
    GetPublishedProgrammesQueryVariables
  >(GetPublishedProgrammesDocument, { api_key: API_KEY });

  const categories = await client.query<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >(GetAllCategoriesDocument, { api_key: API_KEY });

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, { api_key: API_KEY });

  const teams = await client.query<
    GetAllTeamsQuery,
    GetAllTeamsQueryVariables
  >(GetAllTeamsDocument, { api_key: API_KEY });

  const toppers = await client.query<
  CategorBasedToppersQuery,
  CategorBasedToppersQueryVariables
>(CategorBasedToppersDocument, {  });

  const totalPrograms = await client.query<
  TotalProgramsCountQuery,
  TotalProgramsCountQueryVariables
>(TotalProgramsCountDocument, {api_key: API_KEY  });

  return (
    <main className="h-screen w-screen bg-white overflow-hidden">


      {/* Mobile view */}


    <NOT_AV/>



    </main>

  );
}