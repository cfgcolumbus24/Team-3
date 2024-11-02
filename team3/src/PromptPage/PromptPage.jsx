import Sidebar from "../sidebar_components/sidebar";
import Promptinput from "../PromptForm/Promptinput";

export const PromptPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center max-w-3xl">
          <Promptinput />
        </div>
      </div>
    </div>
  )
}

export default PromptPage;
