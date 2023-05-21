import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BabyDolls from '../BabyDolls/BabyDolls';
import BarbieDolls from '../BarbieDolls/BarbieDolls';

const Category = () => {
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>barbie</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <BabyDolls></BabyDolls>
                </TabPanel>
                <TabPanel>
                    <BarbieDolls></BarbieDolls>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;