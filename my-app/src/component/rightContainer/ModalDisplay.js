import React from 'react';
import ModalSignature from './ModalSignature'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';


const ModalDisplay= props =>(
    <div>
        <Button style={{background:"#8214B6"}} className="mb-5 mt-2 btn-block rounded-pill " onClick={props.toggle}>Create Signature</Button>
            <Modal  isOpen={props.isOpen} toggle={props.toggle} >
                <ModalHeader  toggle={props.toggle} ><p style={{color:"#8214B6"}} className="display-5">Just Copy And Paste!</p></ModalHeader>
                    <ModalBody>
                        <div className="p-3" contentEditable={true}>

                                <ModalSignature list={props.list}/>
                        </div>
                    </ModalBody>
                    <ModalFooter >
                        <Button  onClick={props.toggle} style={{background:"#8214B6"}}>Cancel</Button>
                    </ModalFooter>
            </Modal>                   
    </div>
)

export default ModalDisplay;