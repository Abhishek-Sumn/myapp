import React, { useState } from "react";

const Section = ({ title, desc , isVisible,setVisible }) => {


  return (
    <div class="p-2 m-2 border shadow-lg border-blue-400">
      <h1>{title}</h1>

      {isVisible ? (
        <button
          class="m-[2px] p-1 bg-red-200"
          onClick={() => setVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          class="m-[2px] p-1 bg-slate-300"
          onClick={() => setVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showCareer: false,
    showNews: false,
  });
  return (
    <div>
      <Section
        title={"About"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showAbout}
        setVisible={()=>{
            setSectionConfig({
                showAbout: true,
                showCareer: false,
                showNews: false,
            })
        }}

      />
      <Section
        title={"Career"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showCareer}
        setVisible={()=>{
            setSectionConfig({
                showAbout: false,
                showCareer: true,
                showNews: false,
            })
        }}
      />
      <Section
        title={"News"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showNews}

        setVisible={()=>{
            setSectionConfig({
                showAbout: false,
                showCareer: false,
                showNews: true,
            })
        }}
      />
    </div>
  );
};

export default Instamart;
