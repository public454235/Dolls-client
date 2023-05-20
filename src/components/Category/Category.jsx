import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BabyDolls from '../BabyDolls/BabyDolls';

const Category = () => {
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab>Baby Dolls</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <BabyDolls></BabyDolls>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;