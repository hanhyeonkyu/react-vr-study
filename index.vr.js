import React from "react";
import { AppRegistry, asset, Pano, Text, View, VrButton } from "react-vr";

export default class EarthMoonVR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgt: true
        }
    }

    backChange(){
        this.setState({bgt: !this.state.bgt});
    }
    render() {
        return (
            <View>
                {this.state.bgt ? <Pano source={asset("chess-world.jpg")} /> : <Pano source={asset("test-world.jpg")} />}
                <VrButton onClick={this.backChange.bind(this)}>
                    <Text
                        style={{
                            backgroundColor: "#777879",
                            fontSize: 0.8,
                            fontWeight: "400",
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            transform: [{ translate: [0, 0, -3] }],
                        }}
                    >
                        Space Magic!
                    </Text>
                </VrButton>
            </View>
        );
    }
}

AppRegistry.registerComponent("EarthMoonVR", () => EarthMoonVR);
