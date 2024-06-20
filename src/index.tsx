import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, useEffectWithPolling, Button, ToggleFilter, Modal, Loading, DatePicker, DropDownButton, ProfileImage, Checkbox, ICheckboxType, DataList, DynamicSelect, Select, ConfirmButton, MapComponent , IMarker, ICheckboxProps } from "uxp/components";


import './styles.scss';

//import { Floor_View } from "./SpaceView/FloorView";
import { IOT } from "./SpaceView/FloorView";

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const MappingWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    const [isFloorView, setIsFloorView] = React.useState(false)
  
    return (
        <WidgetWrapper>
              <TitleBar title='Mapping'>
                <FilterPanel>
                </FilterPanel>
            </TitleBar>

           <IOT uxpContext={props.uxpContext} />

        </WidgetWrapper>
    )
};



/**
 * Register as a Widget
 */
registerWidget({
    id: "Mapping",
    widget: MappingWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

