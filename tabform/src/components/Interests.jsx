export default function Interests({ data = {}, setData }) {
    const { interests = []} = data;

    const handleDataChange = (e) => {
        const { name, checked} = e.target;
        if(checked) {
            setData({...data, interests: [...interests, name]})
        } else {
            setData({...data, interests: interests.filter((i) => i !== name)})
        }
    }
    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
                        onChange={handleDataChange}
                    />
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="music"
                        checked={interests.includes("music")}
                        onChange={handleDataChange}
                    />
                    Music
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="javascript"
                        checked={interests.includes("javascript")}
                        onChange={handleDataChange}
                    />
                    Javascript
                </label>
            </div>
        </div>
    )
}