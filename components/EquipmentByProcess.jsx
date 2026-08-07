import { getIcon } from "@/utils/helperFunctions"

const EquipmentByProcess = ({ data }) => {
    return (
        <div className="equipment-by-process-list">
            {data && data.map((item, index) => {
                return (
                    <div key={index} className="equipment-by-process-item">
                        <div className="equipment-by-process-icon">
                            {getIcon(item.icon)}
                        </div>
                        <div className="equipment-by-process-content">
                            <h3 className="equipment-by-process-title">{item.title}</h3>
                            <p className="equipment-by-process-description">{item.subtitle}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EquipmentByProcess