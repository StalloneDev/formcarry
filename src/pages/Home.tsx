import React from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
    createIcon,
    Image,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiTruck, FiCreditCard, FiShield } from 'react-icons/fi';

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

const Feature = ({ text, icon, iconBg }: { text: string; icon: React.ReactElement; iconBg: string }) => {
    return (
        <Stack
            p={6}
            bg={useColorModeValue('white', 'gray.800')}
            rounded={'xl'}
            borderWidth="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            w={'full'}
            textAlign={'center'}
            align={'center'}
            pos={'relative'}
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
                borderColor: iconBg,
            }}
            transition={'all .3s ease'}
        >
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}
                mb={4}
                pos={'relative'}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                transition={'all .3s ease'}
            >
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={'lg'} mb={2}>
                {text}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
                {text === 'Large sélection de produits'
                    ? 'Des milliers de produits de qualité à votre disposition'
                    : text === 'Livraison rapide et fiable'
                    ? 'Livraison en 24-48h partout au Bénin'
                    : text === 'Paiement sécurisé via KKiapay'
                    ? 'Transactions sécurisées avec KKiapay'
                    : 'Garantie satisfait ou remboursé'}
            </Text>
        </Stack>
    );
};

export const Home = () => {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'brand.400',
                                zIndex: -1,
                            }}
                        >
                            Achetez en ligne,
                        </Text>
                        <br />
                        <Text as={'span'} color={'brand.400'}>
                            en toute simplicité !
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Découvrez notre marketplace où vous pouvez acheter et vendre des produits
                        en toute sécurité. Profitez de notre système de paiement sécurisé et de
                        notre service client disponible 24/7.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            as={Link}
                            to="/products"
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'brand'}
                            bg={'brand.400'}
                            _hover={{ bg: 'brand.500' }}
                        >
                            Commencer vos achats
                        </Button>
                        <Button
                            as={Link}
                            to="/vendor/register"
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                        >
                            Devenir vendeur
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}
                >
                    <Box
                        position={'relative'}
                        height={'400px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                        bg={'gray.100'}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        >
                            <source src="/videos/ecommerce2.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </Box>
                </Flex>
            </Stack>

            <Box py={20}>
                <Heading
                    textAlign={'center'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'bold'}
                >
                    Pourquoi nous choisir ?
                </Heading>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    spacing={10}
                    px={{ base: 4, md: 8 }}
                >
                    <Feature
                        icon={<Icon as={FiShoppingBag} color={'white'} w={8} h={8} />}
                        iconBg={'brand.400'}
                        text={'Large sélection de produits'}
                    />
                    <Feature
                        icon={<Icon as={FiTruck} color={'white'} w={8} h={8} />}
                        iconBg={'green.400'}
                        text={'Livraison rapide et fiable'}
                    />
                    <Feature
                        icon={<Icon as={FiCreditCard} color={'white'} w={8} h={8} />}
                        iconBg={'purple.400'}
                        text={'Paiement sécurisé via KKiapay'}
                    />
                    <Feature
                        icon={<Icon as={FiShield} color={'white'} w={8} h={8} />}
                        iconBg={'red.400'}
                        text={'Protection des acheteurs'}
                    />
                </SimpleGrid>
            </Box>

            <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')} rounded={'xl'}>
                <VStack spacing={2} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Prêt à commencer ?</Heading>
                    <Text fontSize={'lg'} color={'gray.500'}>
                        Rejoignez notre marketplace dès aujourd'hui !
                    </Text>
                    <Button
                        as={Link}
                        to="/products"
                        rounded={'full'}
                        px={6}
                        colorScheme={'brand'}
                        bg={'brand.400'}
                        _hover={{ bg: 'brand.500' }}
                    >
                        Explorer les produits
                    </Button>
                </VStack>
            </Box>
        </Container>
    );
};
