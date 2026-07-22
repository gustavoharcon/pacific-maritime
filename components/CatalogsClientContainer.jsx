"use client";

import { useState } from "react";
import CatalogsInteractive from "./CatalogsInteractive";
import ShipboardFurnitureCatalog from "./ShipboardFurnitureCatalog";
import CatalogOverlay from "./CatalogOverlay";

const CatalogsClientContainer = ({ catalogsData }) => {
    const [overlayItem, setOverlayItem] = useState(null);

    return (
        <>
            <CatalogsInteractive data={catalogsData} onOpenOverlay={setOverlayItem} />
            <ShipboardFurnitureCatalog data={catalogsData.shipboard_furniture_catalog} onOpenOverlay={setOverlayItem} />
            {overlayItem && (
                <CatalogOverlay item={overlayItem} onClose={() => setOverlayItem(null)} />
            )}
        </>
    );
};

export default CatalogsClientContainer;
