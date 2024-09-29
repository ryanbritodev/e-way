export const NewsPartner = ({ partner }) => {
  return (
    <div className="bg-eblue w-fit px-[.5em] py-[.2em] text-center rounded absolute right-0 top-0">
      <h2 className="font-bold">
        {partner.length >= 10 ? partner.substring(0, 8) + "..." : partner}
      </h2>
    </div>
  );
};
