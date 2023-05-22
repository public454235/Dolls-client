import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BabyDolls from '../BabyDolls/BabyDolls';
import BarbieDolls from '../BarbieDolls/BarbieDolls';
import GirlDolls from '../GirlDolls/GirlDolls';

const Category = () => {
    return (
        <div>

            <Tabs>
                <TabList className='text-center mt-12'>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Barbie</Tab>
                    <Tab>Girl</Tab>
                </TabList>

                <TabPanel>
                    <BabyDolls></BabyDolls>
                </TabPanel>
                <TabPanel>
                    <BarbieDolls></BarbieDolls>
                </TabPanel>
                <TabPanel>
                    <GirlDolls></GirlDolls>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;