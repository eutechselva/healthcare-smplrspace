// 3d integration of selected space of particular space

import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from '../uxp';
import {
    TitleBar, FilterPanel, WidgetWrapper, Button, Modal, useEffectWithPolling, ToggleFilter, Loading, DatePicker,
    DropDownButton, ProfileImage, Checkbox, ICheckboxType, DataList, DynamicSelect, Select, ConfirmButton,
    MapComponent, IMarker, ICheckboxProps
} from "uxp/components";
// import './styles.scss';
import { FC, useEffect } from 'react';
import { loadSmplrJs, Smplr } from '@smplrspace/smplr-loader';
import { Space } from '@smplrspace/smplr-loader/dist/generated/smplr';
import { Asset_ID, Location, } from './iot-data'

import { } from "uxp/components";



interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}


const INITIAL_MODE = '3d';
const occupancyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyklEQVR4nO2YTYhNURzAf4yvMt5kwURKslA+krCZ2AiNj40NssEgCa9ZspnxMSnJZMGUWMhCGbGSjUQWxmfCkJFMUoPGSAbJ19O/zqvTce655717p3efzq/+m3vPOf/zP+f/dS8EAoFAIBAI+FIHrAAagRxVylbgC1BQMghspMpYDPzRjCiKPGugirhuMaIoV6kSaoCvDkPE3YZXcoMNQB7YBNQ7xo0AfjkMGfQwZB6wW8XZlLQMGA1ctJzqWsec2w5DxO1ct3naGP8d2J6GIfsiNiQKpkXMWe0I9kUOXTsjdP1Wt5ToNvQUasoJx1xxi8+GS22J0dfn0NWZxJC5joVF7sbMz6li6FMQJ8fo6k1iyJyYxa+RHpNidD1OsrhkoPeOxSV+0uR5mW7sxbaIhfuGoH9aE5EkPqkbS8wOYMCIjZkeDWMbcEvJfmCch64NwFtN1xNgISkyCpgNTPUYKxt+ajnZR0Ctx/waYBYwnZSoU7dxCXihbkVO6yHQASwBhlnmtZURV2OBJuA80AN8AN6pID8FrCqntZHNNRt1IEruWYrV6xLTaJPhuoUIeRZTUP8x4qzHorpIk7hcc0FbwOpVWrJhkaMl6voBrPMxJG+ZLFd8DjgMHFOt+E9jzEcts/Q7NvJK07Xe8n5AudcRoB24otohfcw3YEacIW8sJyhBet8Qc5xIi1rjuMOQQ5quB5b33RZdvZZxosMZ3IUEUuyHxkdkrW4ja5knXShBbsTFx8sEi+/R1sqpDNWl1RGzgHYl0NUe51ryIdOqAr7TUzrUB5fk/yJjgPnASiUL1DOdCcBe4EwJuk6q7xPpzIeUxogALahnl4FlZJha4EKJ8SRFMFOMBG6WGbB6Tak4zREZ6gCwWcnBiEwmdSsz3EmQfeRHRWboSWCIfExlhrylZfHtm3aRMerVP9+lniJjJ1Z604FAIBAI/Ff8Bctn99hqdLNAAAAAAElFTkSuQmCC'

export const IOT: React.FunctionComponent<IWidgetProps> = (props) => {



    const spaceRef = React.useRef<Space>();

    const [viewerReady, setViewerReady] = React.useState(false);
    const [modalId, setModalId] = React.useState(null)
    const [onOpen, setOnOpen] = React.useState(null)
    const [location, setLocation] = React.useState(null)
    const [assets, setAssets] = React.useState(null)


    // handle 2d/3d modes
    const [mode, setMode] = React.useState<'2d' | '3d'>(INITIAL_MODE);
    const onModeChange = React.useCallback(setMode, []);

    // start viewer
    useEffect(() => {
        // we recommend using the default value 'esm' in your code but stackblitz required 'umd'
        loadSmplrJs('umd')
            .then((smplr) => {
                spaceRef.current = new smplr.Space({
                    spaceId: '78b842f9-0416-43b3-9496-9a6668ab73ad',
                    clientToken: 'pub_eb760fee77634cdab2fe31146fc371c2',
                    containerId: 'test',
                });
                spaceRef.current.startViewer({
                    preview: true,
                    mode,
                    allowModeChange: true,
                    onModeChange,
                    onReady: () => setViewerReady(true),
                    onError: (error) => console.error('Could not start viewer', error),
                });
            })
            .catch((error) => console.error(error));
    }, []);

    let [modalItem, setModelItem] = React.useState<any>(
        {
            "id": '',
            "type": '',
            "assetType": '',
            "status": '',
            "tagNo": '',
            "name": '',
            "condition": '',
            "dt": '',
            "Battery": '',

            "title": '',
            "locationBlock": '',
            "locationFloor": '',
            "locationBuilding": '',






        })




    const openPopup = () => {
        // Define the URL of the page you want to open in the popup
        const url = 'https://example.com/live-location';

        // Define the size and position of the popup window
        const width = 1000;
        const height = 400;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        // Open the popup window
        window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
    };

    React.useEffect (() => {
        console.log('Healthcare_mappingWidget mounted');
        props.uxpContext.executeAction('TestChainy', 'GetDataMapping', {}).then((data) => {
            console.log(data);
            debugger;
            setLocation(JSON.parse(data));
        });
        
    }
        , []);

        React.useEffect (() => {
            console.log('Healthcare_mappingWidget mounted');
            props.uxpContext.executeAction('TestChainy', 'GetDataAssetMapping', {}).then((data) => {
                console.log(data);
                debugger;
                setAssets(JSON.parse(data));
            });
            
        }
            , []);

        

        


    useEffect(() => {
        if (!viewerReady) {
            return;
        }

        spaceRef.current.addDataLayer<Location>({
            id: 'location',
            type: 'polygon',
            data: (location),
            tooltip: (d) => `${d.title} - ${d.name}`,
            color: (d) => {
                if (d.status === 'in-use') {
                    return '#ff3f34'; // Red color for status equal to 'in-use'
                } else if (d.status === 'available') {
                    return '#3aa655'; // Green color for status equal to 'available'
                } else {
                    return '#000000'; // Default color if status is neither 'in-use' nor 'available'
                }
            },
            alpha: 0.7,
            height: mode === '3d' ? 1.9 : 0.0045,
            /*onClick: d => {
                setModalId(d.name)  
                setModelItem({ id: d.name, type: 'location', status: d.status, 
                title: d.title, locationBlock:d.locationBlock, locationFloor:d.locationFloor, 
                locationBuilding:d.locationBuilding })
            }*/
        });


        spaceRef.current.addDataLayer<Asset_ID>({
            id: 'asset_id',
            type: 'point',
            // data: autoElevation(asset_id),
            //data: (asset_id),
            data: (assets),
            tooltip: (d) => `ID : ${d.AssetID} `,
            color: '#357afc',
            diameter: 0.4,
            // onClick: d => showAlert(` is too loud!`)
            onClick: d => {
                // setModalId(d.id)
                // setModelItem({
                //     id: d.id, type: 'point', assetType: d.assetType, status: d.status,
                //     tagNo: d.tagNo, name: d.name, condition: d.condition, dt: d.dt, Battery: d.Battery, title: d.title, locationBlock: d.locationBlock, locationFloor: d.locationFloor,
                //     locationBuilding: d.locationBuilding
                // })

            }


        });

        return () => {
            spaceRef.current.removeDataLayer('location');
            spaceRef.current.removeDataLayer('asset_id');

        };
    }, [viewerReady, mode,]);

    let renderTooltipWithModal = () => {
        // let _id = id
        let _title = ''
        let _type = ''

        console.log(modalId)
        console.log(modalItem)
        if (modalItem["type"] == 'point') {

            _title = ` ${modalItem.assetType} : ${modalItem.id}`
            _type = 'asset_id'
        } else {
            _title = `${modalItem.title} : ${modalItem.name}`
            _type = 'rooms'
        }

        return (
            <Modal
                // title={`Asset_ID ${modalId}`}
                title={_title}
                show={modalId}
                onClose={() => {
                    setModalId(null)
                    setOnOpen(false)
                    setModelItem({})
                }}
                className="custom-modal"

            >
                <div className='tool-tips'>
                    <Button className='incident-management' title='View History' onClick={() => openPopup()}></Button>

                </div>



                <div className="tooltip-list">


                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Tag Number: {modalItem.tagNo}</div>
                    </div>

                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Date/Time: {modalItem.dt}</div>
                    </div>

                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Status: {modalItem.status}</div>
                    </div>

                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Condition: {modalItem.condition}</div>
                    </div>

                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Battery: {modalItem.Battery}</div>
                    </div>

                    <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src="https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg"></img>
                        <div>Location: {modalItem.name} - {modalItem.title} - {modalItem.locationBlock} - {modalItem.locationFloor} - {modalItem.locationBuilding}</div>
                    </div>

                    {_type == 'rooms' && <div className="tooltip-item" style={{ display: 'flex', gap: '5px' }}>
                        <img style={{ width: '15px', height: '15px' }} src={occupancyImage}></img>
                        <div>{`Occupancy :${modalItem.status}`}</div>
                    </div>}

                </div>

            </Modal>
        )
    }

    return (
        // <WidgetWrapper>
        <>
            <TitleBar title='Location Tracking'></TitleBar>

            <div className="smplr-wrapper">
                <div id="test" className="smplr-embed"></div>
            </div>

            { }

            {modalId && renderTooltipWithModal()}


        </>
        // </WidgetWrapper>
    )
}


