import * as React from 'react';
import { Button, Link, View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

class Search_Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        const styles = StyleSheet.create({
            searchContainer: {
                height: 40,
                backgroundColor: this.props.colors.card,
                borderBottomWidth: 0,
                borderTopWidth: 0,
                paddingTop: 0
            },
            inputContainer: {
                paddingTop:0,
                marginTop:0,
                height: 34,
                color: 'gray',
                backgroundColor: 'rgba(201,201,210,0.3)',
                borderWidth: 0
            }
        });
        return (
            <SearchBar
                placeholder="Buscar"
                onChangeText={this.updateSearch}
                value={search}
                round={true}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
                showCancel={true}
            />

        );
    }
}

export default function () {
    const { colors } = useTheme();
    return <Search_Bar colors={colors} />;
}