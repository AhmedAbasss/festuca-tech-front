// // import Container from "@component/Container";
// // import { Carousel } from "@component/carousel";
// // import { CarouselCard } from "@component/carousel-cards";
// // // STYLED COMPONENTS
// // import { CarouselBox } from "./styles";
// // import { getServerSession } from "next-auth";
// // import authOptions from "@lib/auth/auth";
// // import { BaseGetDataSearchResponse } from "@services/types/BaseTypes";
// // import { IStore } from "@services/Security/Store/types";
// // import { STORE_ID } from "@config/constant";
// // import fetchData from "@services/api-server-side";
// // import { getPathImages, UploadType, UploadTypeSize } from "@utils/getImagePath";

// export default async function Section1() {
//   const session = await getServerSession(authOptions);

//   const Store = await fetchData<BaseGetDataSearchResponse<IStore>, void>({
//     endpoint: "Security/Store/Search",
//     token: session?.user.token,
//     params: {
//       storeid: STORE_ID,
//     },
//   });

//   const dataStore = Store?.data.find((item, index) => item.id == Number(STORE_ID)) as IStore;

//   return (
//     <Container pt="1.5rem">
//       <CarouselBox>
//         <Carousel dots autoplay arrows={false} spaceBetween={0} slidesToShow={1} dotStyles={{ bottom: 20 }}>
//           {dataStore?.backgroundsImageCode?.map((item, index) => (
//             <CarouselCard
//               key={index}
//               img={getPathImages({
//                 imageCode: item.value,
//                 type: UploadType.StoreBackground,
//               }).find((it) => it.includes(UploadTypeSize.Size1080x540))}
//             />
//           ))}
//         </Carousel>
//       </CarouselBox>
//     </Container>
//   );
// }
