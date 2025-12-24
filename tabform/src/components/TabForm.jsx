import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

export default function TabForm() {

    const [data, setData] = useState({
        name: "Deepesh",
        age: "27",
        email: "deepesh@gmail.com",
        interests: ["coding", "music"],
        theme: "dark"
    });

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: "Profile",
            component: Profile,
        },
        {
            name: "Interests",
            component: Interests
        },
        {
            name: "Settings",
            component: Settings
        }
    ];

    const ActiveTabComponent = tabs[activeTab].component;

  return <div>
    <div className="heading-container">
        {tabs.map((t, index) => 
        <div 
        key={index} 
        className="heading" 
        onClick={() => setActiveTab(index)}
        >
            {t.name}
        </div>
        )}
    </div>
    <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
    </div>
  </div>;
}

