import MyTips from "../pages/MyTips/MyTips";

const DashboardMyTips = () => {
  return (
    <div className="lg:p-6">
      <h2 className="text-3xl font-heading text-accent mb-4">📋 My Tips</h2>
      <p className="text-base-content text-lg">You can view, update, and delete your submitted tips here.</p>
      <div className="-mt-10 -ml-4">
        <MyTips></MyTips>
      </div>
    </div>
  );
};

export default DashboardMyTips;