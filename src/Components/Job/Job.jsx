

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className=" p-8 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src={logo}
            className="rounded-xl" />
        </figure>
        <div className="space-y-6 mt-4">
        <h2 className="text-zinc-700 text-2xl font-extrabold font-['Manrope']">{job_title}</h2>
        <p className="text-neutral-500 text-left text-xl font-semibold ">{company_name}</p>
        <div className="flex gap-6">
        <div className="px-[19px] py-[9px] rounded border border-indigo-400 justify-start items-start  inline-flex">
    <button className="text-indigo-400 text-base font-extrabold ">{remote_or_onsite}</button>
</div>
        <div className="px-[19px] py-[9px] rounded border border-indigo-400 justify-start items-start  inline-flex">
    <button className="text-indigo-400 text-base font-extrabold ">{job_type}</button>
</div>
        </div>
        <div className="flex gap-4">
        <h6 className="text-neutral-500 text-xl font-semibold">{location}</h6>
        <h6 className="text-neutral-500 text-xl font-semibold">{salary}</h6>
        </div>
        <div className=" px-[18px] py-[11px] cursor-pointer bg-gradient-to-r from-indigo-400 to-violet-500 rounded justify-start items-start gap-2.5 inline-flex">
    <div className="text-white text-xl font-extrabold ']">View Details</div>
</div>
        </div>
</div>
        </div>
    );
};

export default Job;