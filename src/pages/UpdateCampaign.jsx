import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    


    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
            <div className="max-w-screen-lg w-full bg-background shadow-lg rounded-lg p-16">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Add New Campaign
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Fill in the form below to add a new campaign
                </p>
                <form onSubmit={handleUpdateCampaign}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter image URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        {/* Campaign Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Campaign Title
                                </span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter campaign title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        {/* Campaign Type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Campaign Type
                                </span>
                            </label>
                            <select
                                name="type"
                                className="w-full border rounded-lg p-3"
                                required
                            >
                                <option value="personal issue">
                                    Personal Issue
                                </option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">
                                    Innovative Ideas
                                </option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="form-control col-span-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Enter campaign description"
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>
                        </div>

                        {/* Minimum Donation Amount */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Minimum Donation Amount
                                </span>
                            </label>
                            <input
                                type="number"
                                name="minDonation"
                                placeholder="Enter minimum donation amount"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Deadline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* User Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                // value={user.email}
                                className="input input-bordered w-full bg-gray-100"
                                readOnly
                            />
                        </div>

                        {/* User Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                // value={user.name}
                                className="input input-bordered w-full bg-gray-100"
                                readOnly
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn font-bold text-xl bg-softOrange mt-6 w-full hover:bg-paleYellow"
                    >
                        Add Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;
