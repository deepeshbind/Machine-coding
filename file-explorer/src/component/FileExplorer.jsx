import { useState } from "react"


export default function FileExplorer({folderData}) {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  }

  return (
    <div className="container">
      <h3>{folderData.type === 'folder' ? (showChildren ? "📂" : "📁") : "📄"}
        <span onClick={handleClick}>{folderData.name}</span>
        </h3>
        {
          showChildren && folderData?.children?.map((childData , index) => {
            return <FileExplorer key={index} folderData={childData} />
          })
        }
    </div>
  )
}
