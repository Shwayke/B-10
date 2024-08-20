// utils/tailwindClasses.ts
export const styleClasses = {
    layoutBody: "bg-light-primaryBG dark:bg-dark-primaryBG text-light-text dark:text-dark-text",
    navBar: "sticky top-0 w-full z-30 shadow-sm",
    navBarInner: "text-lg flex flex-col sm:flex-row justify-between items-center py-4 relative",
    navBarLogo: "flex items-center gap-4",
    navBarMenues: "flex items-center gap-4 mt-4 sm:mt-0",
    navBarUserMenu: "flex items-center gap-2",
    userMenu: "p-2 border border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md hover:shadow-white transition",
    userMenuItem: "px-4 py-3 hover:bg-neutral-100 transition text-black",
    openedUserMenu: "fixed rounded-md shadow-md bg-white overflow-hidden text-sm flex flex-col cursor-pointer w-[200px] max-h-[calc(100vh-100px)] overflow-y-auto right-4 top-16 z-50 sm:absolute sm:right-0 sm:top-full sm:mt-2 sm:w-[170px]",
    cartCountIcon: "absolute top-[-10px] right-[-10px] bg-cyan-600 text-black w-6 h-6 rounded-full flex justify-center items-center",
    navBarNavigation: "w-full shadow-sm top-20 pt-4",
    navBarNavigationRow: "flex justify-center",
    navBarNavigationItems: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    navBarNavigationItem: "relative flex items-center justify-center p-2",
    navBarNavigationButton: "px-4 py-2 font-bold text-lg text-cyan-600 border-2 border-cyan-600 rounded-lg bg-transparent transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:text-white cursor-pointer w-full text-center",
    cartClientColumns: "grid grid-cols-4 text-xs gap-5 pb-2 items-center mt-8",
    cartClientFirstCol:"col-span-2 justify-self-start",
    cartClientSecondCol:"justify-self-center",
    cartClientLastCol:"justify-self-end",
    cartClientManagement:"border-t-[1px] border-cyan-600 py-4 flex justify-between gap-5",
    cartClientCheckoutSection:"text-sm flex flex-col gap-1 items-start",
    cartClientSubTotal: "flex justify-between w-full text-base font-semibold",
    cartClientContinueShoppingButton:"flex items-center gap-1 mt-2",
    cartItem:"grid grid-cols-4 text-xs md:text-sm gap-4 border-t-[1px] border-cyan-600 py-4 items-center",
    cartItemFirstCol: "col-span-2 justify-self-start gap-2 md:gap-4 flex items-center",
    cartItemImage: "relative w-[70px] aspect-square",
    cartItemNames: "flex flex-col justify-between flex-grow",
    footer: "mt-auto flex flex-col md:flex-row justify-between pt-8 pb-8 relative z-10 w-full",
    footerAboutUs: "w-full md:w-1/3 mb-6 md:mb-0",
    footerAboutUsTitle: "text-base font-bold mb-2",
    footerAboutUsText: "w-full mb-2 md:mb-0",
    footerCreators: "text-base font-bold w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2",
    homeBannerSegragate: "mx-auto flex flex-col md:flex-row items-center justify-between",
    homeBannerLeft: "md:w-1/2 z-10 relative",
    homeBannerTitle: "text-cyan-600 text-6xl font-extrabold mb-6 font-primary leading-tight",
    homeBannerSubtitle: "block text-4xl font-light",
    homeBannerText: "text-lg mb-8 leading-relaxed",
    homeBannerRight: "md:w-1/2 relative mt-10 md:mt-0 flex justify-center",
    homeBannerSimpleCircle: "w-80 h-80 bg-gradient-to-br from-cyan-600 to-blue-600 opacity-90 rounded-full transform rotate-45 absolute top-10 left-10 blur-xl",
    homeBannerGradientCircle: "w-72 h-72 bg-gradient-to-br from-blue-600 to-sky-200 opacity-90 rounded-full transform rotate-45 absolute top-20 left-20 blur-xl",
    homeBannerBigCircle: "w-80 h-80 object-cover rounded-full shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500",
    homeBanner: "relative py-20 px-6 md:px-20",
    marketplaceProductCardInfo: "flex flex-col items-center w-full gap-1",
    marketplaceProductCardImage: "aspect-square overflow-hidden relative w-full flex justify-center items-center",
    marketplaceProductCard: "col-span-1 cursor-pointer border-slate-200 bg-white text-black rounded-sm p-2 transition hover:scale-105 text-center text-sm shadow-sm shadow-slate-400",
    marketplace: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6",
    productPageDetails:"  md:order-1 p-4 bg-white shadow-md rounded-lg flex flex-col justify-between",
    productPageDetailsTitle:"  text-3xl md:text-4xl lg:text-5xl font-medium mb-6",
    productPageDetailsTextBlock:" text-base md:text-lg lg:text-xl text-justify mb-4",
    productPageImageScope:"  grid grid-cols-6 gap-2 h-full max-h-[5000px] min-h-[300px] sm:min-h-[300px]",
    productPageImageSize:"  col-span-6 relative aspect-square",
    productPageImage:"  md:order-2",
    productPage:"  grid grid-cols-1 md:grid-cols-2 gap-4 text-black",
    exhibitionArtist:"  text-2xl font-bold mb-4",
    exhibitionCards:"  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
    exhibitionCardImage:"  relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden",
    exhibitionCardTitle:"  mt-4 text-lg font-semibold text-gray-800",
    exhibitionCard:"  flex flex-col items-center w-full p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-center",
    formWrapperOuter:"  min-h-fit h-full flex items-center justify-center pb-12 pt-24",
    formWrapperInner:"  max-w-[650px] w-full flex flex-col gap-6 items-center shadow-xl shadow-cyan-600 rounded-md p-4 md:p-8",
    addProductFormTextArea:" w-full flex flex-col flex-wrap gap-4",
    addProductFormDragArea:"  border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal text-slate-400 flex flex-col items-center justify-center",
    purchaseTable: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    orderDetails:"w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col gap-2",
    orderItemName:" text-3xl font-bold mt-4 mb-2",
    orderItemArtist:"  font-light italic mt-4 mb-2",
    orderItemCard:"  grid grid-cols-[2fr,auto,auto] text-xs md:text-sm gap-4 border-b-[1.5px] border-white py-4 items-center",
    orderItemImageInner:" relative w-full max-w-[500px] aspect-square",
    orderItemImage:"  col-span-2 justify-self-start flex gap-2 md:gap-6 items-center w-full",
    productsTable: "w-full max-w-[95vw] lg:max-w-[1150px] mx-auto text-xl bg-gray-500 p-4",
    container:"  w-full flex-grow flex flex-col max-w-[1920p] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20",


};
