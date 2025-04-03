
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

let mototaxis = [
    { numero: '123', nome: 'João Mototáxi', placa: 'ABC-1234', foto: 'https://via.placeholder.com/150' },
    { numero: '456', nome: 'Carlos Transporte', placa: 'XYZ-5678', foto: 'https://via.placeholder.com/150' }
];

const DemutranApp = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);
    const [newMoto, setNewMoto] = useState({ numero: '', nome: '', placa: '', foto: '' });
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleSearch = () => {
        const found = mototaxis.find(
            (moto) => moto.numero === search || moto.nome.toLowerCase().includes(search.toLowerCase())
        );
        setResult(found || 'Não encontrado');
    };

    const handleAddMoto = () => {
        mototaxis = [...mototaxis, newMoto];
        alert('Mototáxi cadastrado com sucesso!');
        setNewMoto({ numero: '', nome: '', placa: '', foto: '' });
    };

    const handleLogin = () => {
        if (password === 'DMT@CADASTRO') {
            setLoggedIn(true);
            setPassword('');
        } else {
            alert('Senha incorreta!');
        }
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl mb-4">
                <CardContent className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Consulta de Mototáxis - DEMUTRAN/MOCAJUBA</h1>
                    <p className="text-gray-600 mb-4">Verifique a regularidade dos mototáxis cadastrados.</p>
                    <Input
                        placeholder="Digite o número ou nome"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="mb-2"
                    />
                    <Button onClick={handleSearch} className="w-full">Consultar</Button>
                    {result && (
                        <div className="mt-4">
                            {typeof result === 'string' ? (
                                <p className="text-red-500">{result}</p>
                            ) : (
                                <div className="text-left">
                                    <img src={result.foto} alt="Foto do Mototáxi" className="w-32 h-32 rounded-full mx-auto mb-2" />
                                    <p><strong>Nome:</strong> {result.nome}</p>
                                    <p><strong>Número:</strong> {result.numero}</p>
                                    <p><strong>Placa:</strong> {result.placa}</p>
                                </div>
                            )}
                        </div>
                    )}
                    <Button className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-500 text-white" onClick={() => window.open('https://www.instagram.com/demutranmocajuba/', '_blank')}>
                        <Instagram size={20} /> Acesse o Instagram
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default DemutranApp;
