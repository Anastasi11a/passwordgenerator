import React, { useState } from "react";
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Select,
    Heading,
    Button,
    Input,
    Text
} from "@chakra-ui/react";

const PasswordGenerator: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(8);
    const [complexity, setComplexity] = useState<string>("simple");

    const generatePassword = () => {
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*=_+-<>?';

        let characters = lowercaseLetters;
        if (complexity === "complex") {
            characters += uppercaseLetters;
            characters += numbers;
            characters += symbols;
        }

        let generatedPsw = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPsw += characters[randomIndex];
        }

        setPassword(generatedPsw);
    }

    const getInputColor = () => {
        return complexity === "complex" ? "blue" : undefined;
    }

    return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Box p={4}>
                <Heading mb={6} pb={4} size="xl" textAlign="center" color="blue.600">PASSWORD GENERATOR</Heading>
                <FormControl mb={4}>
                    <FormLabel>Password Length</FormLabel>
                    <Select
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}>

                        <option value={8}>8</option>
                        <option value={12}>12</option>
                        <option value={16}>16</option>
                    </Select>
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel>Password Complexity</FormLabel>
                    <Select
                        value={complexity}
                        onChange={(e) => setComplexity(e.target.value)}>

                        <option value="simple">Simple</option>
                        <option value="complex">Complex</option>
                    </Select>
                </FormControl>

                <Button
                    mt={4}
                    mb={4}
                    width="100%"
                    textAlign="center"
                    colorScheme="blue"
                    onClick={generatePassword}>

                    Generate Password
                </Button>

                {password && (
                    <Text fontSize="small" mt={3} mb={2}>
                        Your generated password:
                    </Text>
                )}

                <Input mb={4} value={password} isReadOnly color="blue.600" colorScheme={getInputColor()} />
            </Box>
        </Flex>
    )
}

export default PasswordGenerator;