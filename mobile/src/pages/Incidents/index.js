import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png'; // auto switch to @x2 or x3
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Incidents() {
    const navigation = useNavigation();

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total}</Text> casos.</Text>
            </View>

            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Escolha um dos casos e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentList}
                //showsVerticalScrollIndicator={false}
                keyExtractor={(incident => String(incident.id))}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.1}
                renderItem={({ item: incident }) => (
                    <View style={styles.incidentView}>
                        <Text style={styles.incidentProp}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProp}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProp}>VALUE:</Text>
                        <Text style={styles.incidentValue}>{incident.value}</Text>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() => {
                                navigation.navigate('Detail', { incident: incident});
                            }}>
                            <Text style={styles.detailButtonText}>Ver mais detalehs</Text>
                            <Feather name="arrow-right" size={16} color={"#E02041"}></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}