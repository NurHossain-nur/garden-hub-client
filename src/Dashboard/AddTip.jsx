import ShareTip from "../pages/ShareTip/ShareTip";

const AddTip = () => {
  return (
    <div className="lg:p-6">
      <h2 className="text-3xl font-heading text-secondary mb-4">➕ Add a New Tip</h2>
      <p className="text-base-content text-lg">Use the form below to submit your garden tip.</p>
      <div className="-mt-10">
        <ShareTip></ShareTip>
      </div>
    </div>
  );
};

export default AddTip;